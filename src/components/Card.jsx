import React from "react";
import "../styles/card.css";

const Card = ({ title, description, imageUrl, imagePosition}) => {
  return (
    <div className="card">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="card-image"
        style={{objectPosition: imagePosition}} />
      ) : (
        <div className="card-image-placeholder" />
      )}

      <div className="card-content">
        {
            title.split("\n").map(line => (
                <h2 key={line} className="card-title">
                    {line}
                </h2>
            ))
        }
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;