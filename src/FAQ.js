import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State to store the current input value and the list of questions
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  // Handle the submission of the question
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setQuestionsList([...questionsList, question]);
      setQuestion(''); // Reset the input field after submission
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQ Page</h1>

      <div className="faq-input">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="faq-list">
        <h2>Frequently Asked Questions</h2>
        {questionsList.length > 0 ? (
          <ul>
            {questionsList.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        ) : (
          <p>No questions added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
