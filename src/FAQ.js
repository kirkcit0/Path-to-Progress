import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State to store the current input value and the list of questions
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // State for managing active question

  // Predefined popular questions
  const popularQuestions = [
    {
      question: "How does the streak system work, and how can I reset it?",
      answer: "The streak system tracks the number of consecutive days you engage with the app. Each day you log in and complete activities, your streak increases. If you miss a day, your streak resets. To manually reset your streak, go to the settings menu and select 'Reset Streak.' This action cannot be undone, so please use it cautiously!"
    },
    {
      question: "How do I earn XP, and what can I do with it?",
      answer: "You can earn XP (experience points) by completing learning modules, achieving your goals, and maintaining your streak. Accumulated XP can be used to unlock new features, access premium content, or track your progress within the app. The more you engage, the more XP you earn!"
    },
    {
      question: "Can I remain anonymous while using the app?",
      answer: "Yes! Our app allows you to create an anonymized profile. You can choose to hide your personal information and still benefit from all the features. You can also set a username that does not reveal your identity while interacting with the community."
    },
  ];

  // Handle the submission of the question
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setQuestionsList([...questionsList, question]);
      setQuestion(''); // Reset the input field after submission
    }
  };

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>FAQ Page</h1>

      <div className="faq-list">
        <h2>Frequently Asked Questions</h2>
        
        {/* Display popular questions */}
        {popularQuestions.map((item, index) => (
          <div key={index}>
            <div 
              className="faq-question" 
              onClick={() => handleQuestionClick(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}

      <div className="faq-input">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

        {/* Display user-submitted questions */}
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