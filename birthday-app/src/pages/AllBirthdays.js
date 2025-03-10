import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, selectBirthdays } from '../redux/birthdaysSlice';
import styled from 'styled-components';
import BirthdayList from '../components/BirthdayList';

const SortButtons = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #eee;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        background-color: #4CAF50;
        color: white;
    }
`;

const AllBirthdays = () => {
    const dispatch = useDispatch();
    const birthdays = useSelector(selectBirthdays);
    const sortBy = useSelector((state) => state.birthdays.sortBy);

    const handleSort = (type) => {
        dispatch(setSortBy(type));
    };

    return (
        <div>
            <h2>All Birthdays</h2>
            <SortButtons>
                <Button onClick={() => handleSort('name')} className={sortBy === 'name' ? 'active' : ''}>
                    Sort by Name
                </Button>
                <Button onClick={() => handleSort('date')} className={sortBy === 'date' ? 'active' : ''}>
                    Sort by Date
                </Button>
            </SortButtons>
            <BirthdayList birthdays={birthdays} />
        </div>
    );
};

export default AllBirthdays;