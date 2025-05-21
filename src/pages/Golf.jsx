import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const Golf = () => {
  return (
    <main>
      <div className="container">
        <h1 className='heading'>세부 골프패키지 & 혼체골프패키지</h1>
        <TwoCardLayout cards={cardsData.golf}/>
      </div> 
    </main>
  );
}

export default Golf