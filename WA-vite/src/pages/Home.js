import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Browse_banner from "../components/Browse_banner";
import Browse_home from "../components/Browse_home";
import Filters from "../components/Filters";
import Suggestions from "../components/Suggestions";
import "../components/css/browse.css";
import Daily_Recipe from "../components/Daily_recipe";

const HomePage = () => {
  const [filters, setMyFilters] = useState([]);
  return (
    <div>
      <Navbar />
      <Browse_home />
      <Daily_Recipe />
      <Suggestions />
    </div>
  );
};

export default HomePage;