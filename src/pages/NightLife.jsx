import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const NightLife = () => {
  return (
    <main> 
      <div className="container">
        <h1 className='heading'>세부밤문화 TIP</h1>
        <TwoCardLayout cards={cardsData.nightlife}/>
      </div>
    </main>
  );
}

export default NightLife