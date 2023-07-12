import React from "react";

const PortfolioItem = ({ title, description, image, link }) => {
  const isVideo = image && (image.endsWith('.webm') || image.endsWith('.mp4'));

  return (
    <div className="card portfolio-item mb-4">
      {isVideo ? (
        <video src={image} className="card-img-top" alt={title} controls />
      ) : (
        <img src={image} className="card-img-top" alt={title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
