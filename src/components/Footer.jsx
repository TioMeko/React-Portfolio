import React from 'react';
import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} Michael Arasimowicz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
