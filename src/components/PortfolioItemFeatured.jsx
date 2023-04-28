const PortfolioItemFeatured = ({ title, description, image, link }) => {
  return (
    <div className="card portfolio-item mb-4 card-featured">
      
      <div className="card-featured-content">
        
        <img src={image} className="card-img-featured" alt={title} />
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View
          </a>
        </div>

      </div>
    </div>
  );
};

export default PortfolioItemFeatured;
