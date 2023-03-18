import React from "react";

import close from "../images/icons/close.png";
const Filters = () => {
  return (
    <div>
      {/*Filters*/}

      <div className="filters">
        <p>Filters:</p>
        <div className="filter">
          <p>
            pastry and hoes <img src={close}></img>
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
        <div className="line"></div>
        <div className="addFilter">
          <input placeholder="Add filter"></input>
        </div>
      </div>
    </div>
  );
};

export default Filters;
