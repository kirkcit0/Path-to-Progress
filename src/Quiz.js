import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      question: 'What is addiction?',
      options: [
        'A healthy habit',
        'A complex condition characterized by compulsive substance use',
        'A form of exercise',
        'A type of diet'
      ],
      correctAnswerIndex: 1
    },
    {
      question: 'Which part of the body does addiction primarily affect?',
      options: [
        'The heart',
        'The brain',
        'The lungs',
        'The skin'
      ],
      correctAnswerIndex: 1
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [isCorrect, setIsCorrect] = useState(Array(questions.length).fill(false));
  const [showIncorrect, setShowIncorrect] = useState(Array(questions.length).fill(false));

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;

    const updatedIsCorrect = [...isCorrect];
    const updatedShowIncorrect = [...showIncorrect];

    if (optionIndex === questions[questionIndex].correctAnswerIndex) {
      updatedIsCorrect[questionIndex] = true; // Mark as correct
      updatedShowIncorrect[questionIndex] = false; // Hide incorrect message
    } else {
      updatedIsCorrect[questionIndex] = false; // Keep it as false for incorrect answer
      updatedShowIncorrect[questionIndex] = true; // Show incorrect message
    }

    setSelectedAnswers(updatedAnswers);
    setIsCorrect(updatedIsCorrect);
    setShowIncorrect(updatedShowIncorrect);
  };

  return (
    <div className="quiz-container">
      <h2>Test Your Knowledge</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <p>{q.question}</p>
          <div className="options">
            {q.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className={`option-button ${
                  selectedAnswers[index] !== null && optionIndex === questions[index].correctAnswerIndex
                    ? 'correct'
                    : selectedAnswers[index] === optionIndex && showIncorrect[index]
                    ? 'wrong'
                    : ''
                }`}
                onClick={() => handleOptionClick(index, optionIndex)}
                disabled={isCorrect[index]} // Disable once correct answer is selected
              >
                {option}
              </button>
            ))}
          </div>
          {showIncorrect[index] && selectedAnswers[index] !== null && !isCorrect[index] && (
            <div className="result-icon">
              <span className="wrong-icon">❌ Incorrect</span>
            </div>
          )}
          {isCorrect[index] && (
            <div className="result-icon">
              <span className="correct-icon">✅ Correct!</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Quiz;
