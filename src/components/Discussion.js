// client/src/components/Discussion.js
import React, { useState } from 'react';
import './Discussion.css';
import axios from 'axios';

function Discussion() {
  const [selectedAddiction, setSelectedAddiction] = useState(null);
  const [threads, setThreads] = useState([]);
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
    fetchThreads(addiction); // Fetch threads when addiction is selected
  };

  const fetchThreads = async (addiction) => {
    try {
      const response = await axios.get(`/api/threads?addiction=${addiction}`);
      setThreads(response.data); // Set threads based on API response
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  };

  const handleNewThread = async () => {
    if (newThreadTitle) {
      try {
        const response = await axios.post('/api/threads', {
          title: newThreadTitle,
          addiction: selectedAddiction
        });
        setThreads([...threads, response.data]); // Update threads state with the new thread
        setNewThreadTitle(''); // Clear input field
      } catch (error) {
        console.error('Error creating new thread:', error);
      }
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
            <strong>{thread.title}</strong> {/* Link to ThreadView can be added here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discussion;
