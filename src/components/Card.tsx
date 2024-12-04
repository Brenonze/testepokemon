import React from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => (
  <div className="card" onClick={onClick}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
