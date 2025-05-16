import React from 'react';
import './TwoCardLayout.css';
import Card from './Card';


const TwoCardLayout = () => {
  return (
    <div className="two-card-container">
      <Card 
        title="Details"
        description="About Details"
        image='src/assets/detail_example.jpg'
      />
      <Card 
        title="Schedule"
        description="About Schedule"
        image='src/assets/detail_example.jpg'
      />
    </div>
  );
};

export default TwoCardLayout;