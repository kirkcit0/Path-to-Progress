// SupportFinder.js
import React, { useState } from 'react';
import './SupportFinder.css';

const SupportFinder = () => {
    //dissabled
  const [zipCode, setZipCode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setResults([]);

    // Fetch latitude and longitude from the zip code
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=YOUR_API_KEY`;

    try {
      const geocodeResponse = await fetch(geocodeUrl);
      if (!geocodeResponse.ok) {
        throw new Error('Could not fetch location data');
      }
      const geocodeData = await geocodeResponse.json();
      const location = geocodeData.results[0]?.geometry.location;

      if (!location) {
        throw new Error('Location not found');
      }

      // Fetch places related to support using the latitude and longitude
      const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=social_facility&key=YOUR_API_KEY`;

      const placesResponse = await fetch(placesUrl);
      if (!placesResponse.ok) {
        throw new Error('Could not fetch places data');
      }
      const placesData = await placesResponse.json();
      setResults(placesData.results);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="support-finder-container">
      <h1>Find Local Support</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {results.length > 0 && (
        <div className="results">
          <h2>Nearby Support Resources:</h2>
          <ul>
            {results.map((item) => (
              <li key={item.place_id}>
                <strong>{item.name}</strong><br />
                {item.vicinity}<br />
                {item.phone_number && <span>Phone: {item.phone_number}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SupportFinder;
