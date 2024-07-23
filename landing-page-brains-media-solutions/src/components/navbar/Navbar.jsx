import { useState } from 'react';
import "./navbar.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import Sidebar from '../sidebar/Sidebar';

const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img src="BMS_logo-1.webp" alt="Logo" />
          </a>
        </div>
        <div className="menu-list">
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
           <ul>
            <li>
              <IoReorderThreeOutline onClick={toggleMenu} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
