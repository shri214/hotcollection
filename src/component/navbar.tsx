import React from "react";
import "./nav.css";
import image1 from "../img/1196306.jpg";

export const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <a href="/home">
        <div className="logo">
          <img className="logo1" src={image1} alt="images1" />
        </div>
      </a>
      <div className="lists">
        <ul className="list">
          <li className="items">
            <a href="/home">Home</a>
          </li>
          <li className="items">
            <a href="category">Category</a>
          </li>
          <li className="items">
            <a href="about">About</a>
          </li>
          <li className="items">
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
