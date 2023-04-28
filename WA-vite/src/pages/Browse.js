import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Browse_banner from "../components/Browse_banner";
import Filters from "../components/Filters";
import Recipes from "../components/Recipes";
import "../components/css/browse.css";
import "../components/css/home.css";

const Browse = () => {
  const [filters, setMyFilters] = useState([]);
  return (
    <div>
      <Navbar />
      <Browse_banner />
      <Filters />
      <Recipes />
    </div>
  );
};

export default Browse;
