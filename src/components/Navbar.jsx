import React, { useState } from "react";
import "../styles/Navbar.css"; // Import CSS file
import logo from "../assets/logo.png"; // Import logo image

const Navbar = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="navbar">
      {/* Navbar Left */}
      <div className="navbar-left">
        <div className="logo">
        <img src={logo} alt="AI-PAMSCO Logo" style={{ height: "40px", borderRadius: "5px" }} />

        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products" />
          <button onClick={() => alert("Search clicked!")}>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      {/* Navbar Right */}
      <div className="navbar-right">
        {/* Help Dropdown */}
        <div className="dropdown" onClick={() => setShowHelp(!showHelp)}>
          <span>Help</span>
          <i className="bi bi-chevron-down"></i>
          {showHelp && (
            <div className="dropdown-content">
              <p>Contact Us</p>
              <p>Support</p>
            </div>
          )}
        </div>

        {/* FAQ Dropdown */}
        <div className="dropdown" onClick={() => setShowFAQ(!showFAQ)}>
          <span>FAQ</span>
          <i className="bi bi-chevron-down"></i>
          {showFAQ && (
            <div className="dropdown-content">
              <p>How it Works</p>
              <p>Payment Options</p>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="icon-container" onClick={() => alert("User Profile Clicked!")}>
          <i className="bi bi-person-circle"></i>
          <span className="notification-badge">2</span>
        </div>
        <div className="icon-container" onClick={() => alert("Wishlist Clicked!")}>
          <i className="bi bi-heart"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="icon-container" onClick={() => alert("Cart Clicked!")}>
          <i className="bi bi-cart"></i>
          <span className="notification-badge">1</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
