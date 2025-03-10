import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddBirthday from './pages/AddBirthday';
import AllBirthdays from './pages/AllBirthdays';
import './App.css'; // Import the CSS

function App() {
    return (
        <div className="app-container">  {/* Add a container for overall styling */}
            <Router>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add Birthday</Link></li>
                        <li><Link to="/all">All Birthdays</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddBirthday />} />
                    <Route path="/all" element={<AllBirthdays />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;