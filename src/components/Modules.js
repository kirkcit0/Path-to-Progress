import React from 'react';
import './Modules.css';
import { useNavigate } from 'react-router-dom';

function Modules() {
  const navigate = useNavigate();

  return (
    <div className="modules-container">
      <h1>Learn About Addiction</h1>
      <div className="module-box" onClick={() => navigate('/module1')}>
        Module 1: Introduction to Addiction
      </div>
      <div className="module-box" onClick={() => navigate('/module2')}>
        Module 2: Understanding Triggers
      </div>
      <div className="module-box" onClick={() => navigate('/module3')}>
        Module 3: Effects on the Brain
      </div>
      <div className="module-box" onClick={() => navigate('/module4')}>
        Module 4: Strategies for Coping
      </div>
      <div className="module-box" onClick={() => navigate('/module5')}>
        Module 5: Seeking Help
      </div>
    </div>
  );
}

export default Modules;
