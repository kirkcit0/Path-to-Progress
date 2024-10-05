import React, { useState } from 'react';

function Support() {
  const [zipCode, setZipCode] = useState('');
  const [supportGroups, setSupportGroups] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const fetchLatLong = async (zip) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(zip)}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Error fetching geolocation data');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      } else {
        console.error('No results found for the provided zip code.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching latitude and longitude:', error);
      return null;
    }
  };

  const fetchSupportGroups = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=20000&keyword=support+group&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Error fetching support groups');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        // Fetch detailed information for each place
        const detailedSupportGroups = await Promise.all(
          data.results.map(async (place) => {
            const details = await fetchPlaceDetails(place.place_id);
            return { ...place, ...details };
          })
        );
        setSupportGroups(detailedSupportGroups);
      } else {
        console.warn('No support groups found for this location.');
        setSupportGroups([]);
      }
    } catch (error) {
      console.error('Error fetching support groups:', error);
      alert('An error occurred while fetching support groups. Please try again later.');
    }
  };

  // Function to fetch place details using place_id
  const fetchPlaceDetails = async (placeId) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_phone_number&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Error fetching place details');
      }

      const data = await response.json();
      return {
        phone: data.result.formatted_phone_number || 'No phone number available',
      };
    } catch (error) {
      console.error('Error fetching place details:', error);
      return { phone: 'No phone number available' };
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (zipCode) {
      const location = await fetchLatLong(zipCode);
      if (location) {
        await fetchSupportGroups(location.lat, location.lng);
      }
    }
  };

  return (
    <div className="support-container">
      <h1>Support Page</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="zipCode">Enter your Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleZipCodeChange}
          required
        />
        <button type="submit">Search Support Groups</button>
      </form>
      <div className="support-groups-list">
        <h2>Local Support Groups:</h2>
        <ul>
          {supportGroups.length > 0 ? (
            supportGroups.map((group, index) => (
              <li key={index}>
                <h3>{group.name}</h3>
                <p>Address: {group.vicinity}</p>
                <p>Rating: {group.rating}</p>
                <p>Phone: {group.phone}</p>
              </li>
            ))
          ) : (
            <p>No support groups found for this zip code.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Support;
