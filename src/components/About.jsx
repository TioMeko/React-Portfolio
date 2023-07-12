import React from 'react';
import '../styles/styles.css';
import Images from './Images';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="row">
        <div className="image-text-container">
          <img
            src= {Images.pro}
            alt="Avatar"
            className="img-fluid"
          />
          <div className="text-content">
            <h2>Hello</h2>
            <p>
            I am an aspiring backend developer who enjoys the challenge of building 
            robust systems behind the scenes, and I find joy in exploring the creative 
            possibilities of game development with Unity and UE5 game engines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
