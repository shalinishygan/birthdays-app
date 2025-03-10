import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBirthday } from '../redux/birthdaysSlice';
import { v4 as uuidv4 } from 'uuid';
import './styles.css'; // Import styles

const AddBirthday = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');

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
        navigate('/');
    };

    return (
        <div className="add-birthday-form">
            <h2>Add Birthday</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Birthday:</label>
                    <input
                        type="date"
                        className="form-input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Image URL:</label>
                    <input
                        type="url"
                        className="form-input"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-button">
                    Add Birthday
                </button>
            </form>
        </div>
    );
};

export default AddBirthday;