import "./sidebar.css";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
      <ul className="sidebar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#vision">Vision</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
      <button className="close-btn" onClick={toggleMenu}>X</button>
    </div>
  );
};

export default Sidebar;
