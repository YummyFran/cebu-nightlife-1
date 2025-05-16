import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const Golf = () => {
  return (
    <main>
      <div className="container">
        <h1>세부골프</h1>
        <TwoCardLayout cards={cardsData.golf}/>
      </div> 
    </main>
  );
}

export default Golf