import React from "react";

import Navbar from "../components/Navbar";
import Browse_page from "../components/Browse_banner";
import Daily_Recipe from "../components/Daily_recipe";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Browse_page/>
      <Daily_Recipe/>
      <Suggestions />
      <Footer />
    </div>
  );
};

export default HomePage;