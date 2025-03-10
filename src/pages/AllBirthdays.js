import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, selectBirthdays } from '../redux/birthdaysSlice';
import BirthdayList from '../components/BirthdayList';
import './styles.css';

const AllBirthdays = () => {
    const dispatch = useDispatch();
    const birthdays = useSelector(selectBirthdays);
    const sortBy = useSelector((state) => state.birthdays.sortBy);

    const handleSort = (type) => {
        dispatch(setSortBy(type));
    };

    return (
        <div className="all-birthdays-container">
            <h2>All Birthdays</h2>
            <div className="sort-buttons">
                <button
                    className={`sort-button ${sortBy === 'name' ? 'active' : ''}`}
                    onClick={() => handleSort('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`sort-button ${sortBy === 'date' ? 'active' : ''}`}
                    onClick={() => handleSort('date')}
                >
                    Sort by Date
                </button>
            </div>
            <BirthdayList birthdays={birthdays} />
        </div>
    );
};

export default AllBirthdays;