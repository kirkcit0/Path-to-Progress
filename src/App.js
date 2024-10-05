import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modules from './Modules';
import Support from './Support';
import Discussion from './Discussion';
import FAQ from './FAQ';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/support" element={<Support />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
