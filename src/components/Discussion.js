import React, { useState } from 'react';
import './Discussion.css';

function Discussion() {
  const [selectedAddiction, setSelectedAddiction] = useState(null);

  const addictions = [
    'Alcohol Addiction',
    'Drug Addiction',
    'Gambling Addiction',
    'Internet Addiction',
    'Smoking Addiction'
  ];

  const handleAddictionSelect = (addiction) => {
    setSelectedAddiction(addiction);
  };

  if (selectedAddiction) {
    return (
      <div className="discussion-container">
        <h1>{selectedAddiction} Threads</h1>
        <DiscussionThreads addiction={selectedAddiction} />
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

function DiscussionThreads({ addiction }) {
  const [threads, setThreads] = useState([
    { id: 1, title: 'How to start the recovery process?', replies: 3 },
    { id: 2, title: 'Support resources available', replies: 5 }
  ]);
  const [newThread, setNewThread] = useState('');

  const handleNewThread = () => {
    if (newThread) {
      setThreads([...threads, { id: threads.length + 1, title: newThread, replies: 0 }]);
      setNewThread('');
    }
  };

  return (
    <div className="threads-container">
      <h2>Threads for {addiction}</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <strong>{thread.title}</strong> ({thread.replies} replies)
            {/* You can add a link or button here to view replies */}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newThread}
          onChange={(e) => setNewThread(e.target.value)}
          placeholder="Start a new thread"
        />
        <button onClick={handleNewThread}>Post Thread</button>
      </div>
    </div>
  );
}

export default Discussion;
