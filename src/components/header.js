import "./header.css";
import logo from "../assets/class-logo.png";
import siomay from "../assets/siomay.png";
import React, { useState } from "react";

function Header() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const Contact = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="RPL 1 Logo" className="header-logo"></img>
          <p className="header-class">XI RPL 1</p>
        </div>
        <ul>
          <a href="#home">Home</a>
          <a href="#main-course">MainCourse</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
      <div className="header-hero">
        <div className="header-hero-text">
          <h1>New Menu</h1>
          <h1>Best Taste</h1>
          <div className="location">
          <i class="fa-solid fa-map-pin"></i>
          <p>SMAKZIE | Kampus Satu | Stand RPL 1</p>
          </div>
          <a href="https://forms.gle/1uXUxz4FDKm2hQmP8" target="blank">
          <button>Order Here! Via Google Form</button>          
          </a>
          <button onClick={Contact}>Order Here!</button>
          {showContactInfo && (
            <p className="order">
              Contact Information: <br />
              Phone: 085220536728 ( Vina ) <br />
              Phone: 87729041703 ( Hasbiawak )
              <a href="https://forms.gle/1uXUxz4FDKm2hQmP8">Form Order</a>
            </p>
          )}
        </div>
        <img src={siomay} alt="somay" className="siomay"></img>
      </div>
    </header>
  );
}

export default Header;
