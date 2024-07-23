import ThemeToggle from "../theme/ThemeToggle";
import { IoReorderThreeOutline } from "react-icons/io5";

import "./navbar.css";

const Navbar = () => {
  return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <a href="">
              <img src="BMS_logo-1.webp" />
            </a>
          </div>
          <div className="menu-list">
            <ul className="navbar-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <ThemeToggle/>
              </li>
            </ul>
            <ul>
              <li>
                <IoReorderThreeOutline />
              </li>
            </ul>

          </div>
        </div>
      </div>
  );
};

export default Navbar;
