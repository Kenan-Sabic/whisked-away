import React from "react";
import home from "../images/icons/home.png";
import user from "../images/icons/user.png";
import bannerImg from "../images/bgff.jpg";
import search from "../images/icons/search.png";
import close from "../images/icons/close.png";
import krosan1 from "../images/krosan1.jpg";
import krosan2 from "../images/krosan2.jpg";
import heart from "../images/icons/heart.png";
import bookmark from "../images/icons/bookmark (1).png";
import "./css/browse.css";
const browse = () => {
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

      {/* Banner and search bar*/}
      <div className="banner">
        <img src={bannerImg}></img>
        <h1>Search for a recipe!</h1>
        <div className="searchbox">
          <input placeholder="Type in a recipe"></input>
          <img src={search} id="search"></img>
        </div>
      </div>

      {/*Filters*/}
      <div className="filters">
        <p>Filters:</p>
        <div className="filter">
          <p>
            pastry <img src={close}></img>
          </p>
        </div>

        <div className="filter">
          <p>
            dessert <img src={close}></img>
          </p>
        </div>

        <div className="filter">
          <p>
            chocolate <img src={close}></img>
          </p>
        </div>
        <div className="addFilter">
          <input placeholder="Add filter"></input>
        </div>
        <div className="line"></div>
      </div>

      {/*Recipes*/}
      <div className="recipes">
        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Faris</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan2}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Ismar</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Adnan</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Faris</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan2}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Ismar</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Adnan</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Faris</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>
      </div>
    </div>
  );
};

export default browse;
