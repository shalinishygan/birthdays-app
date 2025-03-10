import React from 'react';
import BirthdayCard from './BirthdayCard';

const BirthdayList = ({ birthdays }) => {
    return (
        <div>
            {birthdays.map((birthday) => (
                <BirthdayCard key={birthday.id} birthday={birthday} />
            ))}
        </div>
    );
};

export default BirthdayList;