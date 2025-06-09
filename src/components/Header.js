import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="nav-right">
          <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Me</ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
