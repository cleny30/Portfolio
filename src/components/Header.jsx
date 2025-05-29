import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Portfolio</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work Experience</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;