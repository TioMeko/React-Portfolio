import React from 'react';
import Nav from './Nav';
import Avatar from './Avatar';

const Header = () => {
  return (
    <header className="header-container">
      <Avatar />
      <Nav />
    </header>
  );
}

export default Header;
