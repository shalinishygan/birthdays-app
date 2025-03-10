import React from 'react';
// In src/components/BirthdayCard.js
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`;

const BirthdayCard = ({ birthday }) => {
    return (
        <Card>
            <img src={birthday.image} alt={birthday.name} />
            <div>
                <h4>{birthday.name}</h4>
                <p>{birthday.date}</p>
            </div>
        </Card>
    );
};

export default BirthdayCard;