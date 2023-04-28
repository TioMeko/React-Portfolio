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
              I'm an aspiring developer / 2D-3D artist based in Connecticut.
              I have a passion for web design and art which leads
              me to create beautiful designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
