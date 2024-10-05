import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Modules from './components/Modules';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module5 from './components/Module5';
import Support from './components/Support'; // Import the Support component
import Discussion from './components/Discussion';
import FAQ from "./components/FAQ";
import XPStatsPage from './components/XPStatsPage'; 

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
          <Route path="/profile" element={<XPStatsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
