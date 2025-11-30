import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMobileOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="navbar">

      {/* Mobile Open Menu Icon */}
      <img
        src={menu_open}
        alt="open menu"
        className="nav-mob-open"
        onClick={() => setIsMobileOpen(true)}
      />

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMobileOpen ? 'open' : ''}`}>

        {/* Mobile Close Button */}
        <img
          src={menu_close}
          alt="close menu"
          className="nav-mob-close"
          onClick={() => setIsMobileOpen(false)}
        />

        <li onClick={() => handleMenuClick("home")}>
          <a href="#home"><p>Home</p></a>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => handleMenuClick("about")}>
          <a href="#about"><p>About me</p></a>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => handleMenuClick("services")}>
          <a href="#services"><p>Service</p></a>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => handleMenuClick("work")}>
          <a href="#work"><p>My-Work</p></a>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => handleMenuClick("contact")}>
          <a href="#contact"><p>Contact</p></a>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="nav-connect">Connect with me</div>

      <div id="hr">
        <hr />
      </div>
      
    </div>
  );
};

export default Navbar;
