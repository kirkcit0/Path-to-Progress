// client/src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Modules from './components/Modules/Modules';
import Module1 from './components/Modules/Module1';
import Module2 from './components/Modules/Module2';
import Module3 from './components/Modules/Module3';
import Module4 from './components/Modules/Module4';
import Module5 from './components/Modules/Module5';
import Support from './components/Support'; // Import the Support component
import Discussion from './components/Discussion';
import ThreadView from './components/ThreadView';
import FAQ from "./components/FAQ";
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    return (
        <Router>
            <div className="App">
                {/* Render Navbar only when the user is logged in */}
                {loggedInUser && <Navbar />}

                {loggedInUser ? (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/modules" element={<Modules />} />
                        <Route path="/module1" element={<Module1 />} />
                        <Route path="/module2" element={<Module2 />} />
                        <Route path="/module3" element={<Module3 />} />
                        <Route path="/module4" element={<Module4 />} />
                        <Route path="/module5" element={<Module5 />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/discussion" element={<Discussion />} />
                        <Route path="/discussion/:threadId" element={<ThreadView />} />
                        <Route path="/FAQ" element={<FAQ />} />
                    </Routes>
                ) : (
                    <div>
                        <Register />
                        <Login setLoggedInUser={setLoggedInUser} />
                    </div>
                )}
                {loggedInUser && <button onClick={handleLogout}>Logout</button>}
            </div>
        </Router>
    );
};

export default App;
