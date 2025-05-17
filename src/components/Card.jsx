import React from "react";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imageUrl, slug }) => {
  const navigate = useNavigate()

  return (
    <div className="card" onClick={() => navigate(slug)}>
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