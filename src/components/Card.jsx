import React from "react";
import "../styles/card.css"; // Your custom CSS file

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image ? (
        <img src={image} alt={title} className="card-image" />
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
