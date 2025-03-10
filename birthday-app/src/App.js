import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddBirthday from './pages/AddBirthday';
import AllBirthdays from './pages/AllBirthdays';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddBirthday />} />
                    <Route path="/all" element={<AllBirthdays />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;