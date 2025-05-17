import React from 'react';
import TwoCardLayout from '../components/TwoCardLayout';
import cardsData from '../data/cards.json'

const PoolVilla = () => {
  return (
    <main>
      <div className="container">
        <h1 className='heading'>세부풀빌라패키지 & 세부황제패키지</h1>
        <TwoCardLayout cards={cardsData.poolvilla}/>  
      </div> 
    </main>
  );
};

export default PoolVilla;
