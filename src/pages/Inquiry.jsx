import React from 'react'
import TwoCardLayout from '../components/TwoCardLayout'
import cardsData from '../data/cards.json'

const Inquiry = () => {
  return (
    <main>
      <div className="container">
        <h1 className='heading'>1:1문의</h1>
        <TwoCardLayout cards={cardsData.inquiry}/>
      </div> 
    </main>
  );
}

export default Inquiry