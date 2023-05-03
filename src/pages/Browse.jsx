import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Browse_search from "../components/BrowseSearchBanner";
import Filters from "../components/Filters";
import Recipes from "../components/Recipes";
import Footer from "../components/Footer";

const Browse = () => {
  const [filters, setMyFilters] = useState([]);
  return (
    <div>
      <Navbar />
      <Browse_search />
      <Filters />
      <Recipes />
      <Browse_search />
    </div>
  );
};

export default Browse;
