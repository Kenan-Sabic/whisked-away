import React from "react";
import krosan1 from "../images/krosan1.jpg";
import krosan2 from "../images/krosan2.jpg";
import heart from "../images/icons/heart.png";
import bookmark from "../images/icons/bookmark (1).png";
const Suggestions = () => {
  return (
    <div>

        <div className="filters">
            <p>Suggested recipes:</p>
        </div>

      <div className="daily-line"></div>  
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

export default Suggestions;