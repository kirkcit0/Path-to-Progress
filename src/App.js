import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Modules from './Modules';
import Module1 from './Module1';
import Module2 from './Module2';
import Module3 from './Module3';
import Module4 from './Module4';
import Module5 from './Module5';
import Support from './Support'; // Import the Support component
import Discussion from './Discussion';
import FAQ from "./FAQ";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/module1" element={<Module1 />} />
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
          <Route path="/module4" element={<Module4 />} />
          <Route path="/module5" element={<Module5 />} />
          <Route path="/support" element={<Support />} /> {/* Add this route */}
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
