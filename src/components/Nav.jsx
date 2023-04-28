import React from "react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav>
      <HashLink smooth to="#about" className="smooth-scroll">
        About
      </HashLink>
      <HashLink smooth to="#skills" className="smooth-scroll">
        Skills
      </HashLink>
      <HashLink smooth to="#portfolio" className="smooth-scroll">
        Portfolio
      </HashLink>
      <HashLink smooth to="#contact" className="smooth-scroll">
        Contact
      </HashLink>
    </nav>
  );
};

export default Nav;
