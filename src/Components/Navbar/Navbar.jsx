import React, { useState } from 'react';
import './Navbar.css';
import name from '../../assets/name.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (id) => {
    setMenu(id);
    setIsAnimating(true);
    setShowMenu(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsAnimating(false);
    }, 400);
  };

  return (
    <>
    <div className={`navbar ${isAnimating ? 'fade-out' : ''}`}>
      {/* Left - Logo */}
      <div className="nav-left">
        <img src={name} alt="name" className="nav-image" />
      </div>

      {/* Center - Menu */}
      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        {["Home", "About", "TechStack", "Projects", "Contact"].map((id) => {
          const anchorId =
            id === "TechStack" ? "services" :
            id === "Projects" ? "work" :
            id === "Home" ? "home" :
            id === "About" ? "about" :
            id === "Contact" ? "contact" : id;

          return (
            <li key={id} className="nav-item">
              <button className="anchor-link" onClick={() => handleClick(anchorId)}>
                <p>{id}</p>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right - Hamburger */}
      <div className="nav-right">
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </div>
    
      <div className="navbar-underline" />
      </>
  );
};

export default Navbar;
