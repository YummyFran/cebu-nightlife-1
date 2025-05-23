import React from 'react';
import '../styles/twocardlayout.css'
import Card from './Card';

const TwoCardLayout = ({ cards = [] }) => {
  return (
    <div className="two-card-container">
      {
        cards.map((card, index) => (
          <Card key={index} 
          title={card.title} 
          description={card.description} 
          imageUrl={card.imageUrl} 
          imagePosition={card.imagePosition}
          slug={card.slug}
          fit={card.fit}
          />
        ))
      }
    </div>
  );
};

export default TwoCardLayout;