import React from 'react';
import './TwoCardLayout.css';
import Card from './Card';

const TwoCardLayout = () => {
  return (
    <div className="two-card-container">
      <div className="card">
        <div className="label-box">
          <Card title={"Night Project"} description={"chuhcus"} url={"dsada"}/>
        </div>
      </div>
      <div className="card">
        <div className="label-box">
          <Card title={"Day Project"}/>
        </div>
      </div>
    </div>
  );
};

export default TwoCardLayout;