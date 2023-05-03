import React from "react";

import Navbar from "../components/Navbar";
import Browse_page from "../components/HomePageBanner";
import Daily_Recipe from "../components/Daily_recipe";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
import CalculatorHome from "../components/CalculatorHome";
const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Browse_page/>
      <Daily_Recipe/>
      <Suggestions />
      <CalculatorHome />
    </div>
  );
};

export default HomePage;