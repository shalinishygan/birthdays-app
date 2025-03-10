import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBirthday } from '../redux/birthdaysSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const FormContainer = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const AddBirthday = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(''); // URL to an image

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBirthday = {
            id: uuidv4(),
            name,
            date,
            image,
        };

        dispatch(addBirthday(newBirthday));
        navigate('/'); // Redirect to home page after adding
    };

    return (
        <FormContainer>
            <h2>Add Birthday</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Input
                    type="url"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <Button type="submit">Add Birthday</Button>
            </form>
        </FormContainer>
    );
};

export default AddBirthday;