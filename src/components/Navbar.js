import React from "react";
import "./css/browse.css";
import home from "../images/icons/home.png";
import user from "../images/icons/user.png";
const Navbar = () => {
  return (
    <div>
      {/*Navbar*/}
      <div className="navbar">
        <div className="nav-item">
          <img src={home}></img>
          <a>Home</a>
        </div>
        <div className="nav-item right">
          <img src={user}></img>
          <a>Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
