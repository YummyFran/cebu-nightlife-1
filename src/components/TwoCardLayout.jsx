import React from 'react';
import './TwoCardLayout.css';

const TwoCardLayout = () => {
  return (
    <div className="two-card-container">
      <div className="card">
        <div className="label-box">Label</div>
      </div>
      <div className="card">
        <div className="label-box">Label</div>
      </div>
    </div>
  );
};

export default TwoCardLayout;