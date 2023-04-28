// Stars.jsx
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 50;
      const newStars = [];

      for (let i = 0; i < starCount; i++) {
        const star = {
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: Math.random(),
          animationDuration: Math.random() * 3 + 2,
        };
        newStars.push(star);
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
