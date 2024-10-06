// client/src/components/ThreadView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ThreadView.css'; // Create this CSS file for styling if needed

const ThreadView = () => {
  const { threadId } = useParams(); // Get the thread ID from the URL
  const [thread, setThread] = useState(null); // State for the selected thread
  const [replies, setReplies] = useState([]); // State for replies
  const [newReply, setNewReply] = useState('');

  // Sample thread data - In a real app, you would fetch this from your backend
  const sampleThreads = [
    { id: 1, title: 'How to start the recovery process?', replies: ['Consider reaching out for help.', 'Set small, achievable goals.'] },
    { id: 2, title: 'Support resources available', replies: ['Check local community centers.', 'Online support groups can be helpful.'] }
  ];

  useEffect(() => {
    // Simulating fetching thread data from a server
    const foundThread = sampleThreads.find(t => t.id === parseInt(threadId));
    if (foundThread) {
      setThread(foundThread.title);
      setReplies(foundThread.replies);
    } else {
      setThread('Thread not found');
    }
  }, [threadId]);

  const handleReply = () => {
    if (newReply) {
      setReplies([...replies, newReply]); // Add new reply to the replies state
      setNewReply(''); // Clear the input field
    }
  };

  return (
    <div className="thread-view-container">
      <h2>{thread}</h2>
      <h3>Replies:</h3>
      <ul>
        {replies.map((reply, index) => (
          <li key={index}>{reply}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Reply to this thread"
        />
        <button onClick={handleReply}>Post Reply</button>
      </div>
    </div>
  );
};

export default ThreadView;
