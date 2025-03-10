import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBirthdaysToday } from '../redux/birthdaysSlice';
import styled from 'styled-components';
import BirthdayList from '../components/BirthdayList';

const HomeContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const AddBirthdayLink = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 20px;
`;

const AllBirthdaysLink = styled(Link)`
    display: inline-block;
    padding: 5px 10px;
    color: blue;
    text-decoration: underline;
`;

const Home = () => {
    const birthdaysToday = useSelector(selectBirthdaysToday);

    return (
        <HomeContainer>
            <h1>Birthday App</h1>
            <AddBirthdayLink to="/add">Add Birthday</AddBirthdayLink>

            <h2>Birthdays Today</h2>
            {birthdaysToday.length > 0 ? (
                <BirthdayList birthdays={birthdaysToday} />
            ) : (
                <p>No birthdays today!</p>
            )}

            <AllBirthdaysLink to="/all">See All Birthdays</AllBirthdaysLink>
        </HomeContainer>
    );
};

export default Home;