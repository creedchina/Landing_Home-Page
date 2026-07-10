import './Flipcard.css';

const FlipCard = ({ frontTitle, backTitle, backText, backgroundImage, linkTo }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        
        {/* FRONT SIDE */}
        <div 
          className="flip-card-front" 
          style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
        >
          <h3>{frontTitle}</h3>
          <div className="corner-icon">⌟</div>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <h3>{backTitle || frontTitle}</h3>
          <p>{backText || "Click to learn more about our services."}</p>
          <a href={linkTo || "#"} className="read-more-btn">
            View Details &gt;
          </a>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;