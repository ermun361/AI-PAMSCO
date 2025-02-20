
import React from "react";
import "../styles/Features.css";
import { FaLock, FaUser, FaTruck } from "react-icons/fa"; // Import icons

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <FaLock className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>Enjoy secure and reliable payment options for every transaction.</p>
        </div>
        <div className="feature-item">
          <FaUser className="feature-icon" />
          <h3>User Profiles</h3>
          <p>Create personalized profiles to manage your buying and selling activities.</p>
        </div>
        <div className="feature-item">
          <FaTruck className="feature-icon" />
          <h3>Transport Services</h3>
          <p>Access affordable transport solutions for your goods.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
