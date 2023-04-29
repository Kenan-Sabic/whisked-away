import React from "react";
import bannerImg from "../assets/bgff.jpg";
import search from "../assets/search.png";
const Browse_banner = () => {
  return (
    <div>
      {/* Banner and search bar*/}
      <div className="banner">
        <img src={bannerImg}></img>
        <h1>Search for a recipe!</h1>
        <div className="searchbox">
          <input placeholder="Type in a recipe"></input>
          <img src={search} id="search"></img>
        </div>
      </div>
    </div>
  );
};

export default Browse_banner;
