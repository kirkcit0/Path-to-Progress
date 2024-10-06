import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Discussion.css';

function Discussion() {
  const [selectedAddiction, setSelectedAddiction] = useState(null);
  const [threads, setThreads] = useState([]); // Initialize threads state
  const [newThreadTitle, setNewThreadTitle] = useState('');

  const addictions = [
    'Alcohol Addiction',
    'Drug Addiction',
    'Gambling Addiction',
    'Internet Addiction',
    'Smoking Addiction'
  ];

  const handleAddictionSelect = (addiction) => {
    setSelectedAddiction(addiction);
    fetchThreads(addiction); // Fetch threads for the selected addiction
  };

  const fetchThreads = async (addiction) => {
    try {
      const response = await axios.get(`/api/threads?addiction=${addiction}`);
      setThreads(response.data); // Set fetched threads
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  };

  const handleNewThread = async (event) => {
    if (newThreadTitle) {
      try {
        const response = await axios.post('http://localhost:5050/api/threads', {
          title: newThreadTitle,
          addiction: selectedAddiction
        });
        
        setThreads([...threads, response.data]); // Update threads state with the new thread
        setNewThreadTitle(''); // Clear input field
      } catch (error) {
        alert(error)
        console.error('Error creating new thread:', error);
      }
    } else {
      alert("bad")
      console.log("No thread title provided"); // Add this line
    }
  };
  

  if (selectedAddiction) {
    return (
      <div className="discussion-container">
        <h1>{selectedAddiction} Threads</h1>
        <DiscussionThreads threads={threads} />
        <div>
          <input
            type="text"
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
            placeholder="Start a new thread"
          />
          <button onClick={handleNewThread}>Post Thread</button>
        </div>
      </div>
    );
  }

  return (
    <div className="discussion-container">
      <h1>Select an Addiction to Discuss</h1>
      <ul>
        {addictions.map((addiction) => (
          <li key={addiction}>
            <button onClick={() => handleAddictionSelect(addiction)}>{addiction}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DiscussionThreads({ threads }) {
  return (
    <div className="threads-container">
      <h2>Threads</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <strong>{thread.title}</strong> ({thread.replies.length} replies) {/* Display replies count */}
            {/* You can add a link or button here to view replies */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discussion;
