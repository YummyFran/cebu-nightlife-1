import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const EscortGirl = () => {
  return (
    <main> 
      <div className="container">
        <h1 className='heading'>세부에스코트걸</h1>
        <TwoCardLayout cards={cardsData.escortgirl}/>
      </div>
    </main>
  );
}

export default EscortGirl