import React, { useEffect, useState } from "react";
import "./nav.scss";
import image1 from "../img/1196306.jpg";
import { handleClick } from "./share";

export const Navbar: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const handleVisibility = (e: React.MouseEvent) => {
    setVisibility(!visibility);
    e.stopPropagation();
  };

  useEffect(() => {
    const func = () => {
      setVisibility(false);
    };
    document.addEventListener("click", func);
    return () => {
      document.removeEventListener("click", func);
    };
  }, []);
  
  return (
    <nav id="navbar">
      <a href="/home">
        <div className="logo">
          <img className="logo1" src={image1} alt="images1" />
        </div>
      </a>
      <div className={`lists ${visibility ? "visible" : ""}`}>
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
          <li className="item" onClick={handleClick}>
            Share
          </li>
        </ul>
      </div>
      <div className="icons">
        <span className="material-icons icon" onClick={handleVisibility}>
          menu
        </span>
      </div>
    </nav>
  );
};
