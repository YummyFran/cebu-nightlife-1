import React from "react";
import "../styles/card.css";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="card-image" />
      ) : (
        <div className="card-image-placeholder" />
      )}

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;