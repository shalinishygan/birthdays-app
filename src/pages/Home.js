import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBirthdaysToday } from '../redux/birthdaysSlice';
import BirthdayList from '../components/BirthdayList';
import './styles.css';  

const Home = () => {
    const birthdaysToday = useSelector(selectBirthdaysToday);

    return (
        <div className="home-container">
            <h1 className="home-title">Birthday App</h1>
            <Link to="/add" className="add-birthday-link">Add Birthday</Link>

            <div className="birthdays-today-section">
                <h2 className="birthdays-today-title">Birthdays Today</h2>
                {birthdaysToday.length > 0 ? (
                    <BirthdayList birthdays={birthdaysToday} />
                ) : (
                    <p className="no-birthdays-message">No birthdays today!</p>
                )}
            </div>

            <Link to="/all" className="all-birthdays-link">See All Birthdays</Link>
        </div>
    );
};

export default Home;