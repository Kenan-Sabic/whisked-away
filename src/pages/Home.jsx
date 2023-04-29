import React from "react";

import Navbar from "../components/Navbar";
import Browse_banner from "../components/Browse_home";
import Daily_Recipe from "../components/Daily_recipe";
const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Browse_banner/>
      <Daily_Recipe/>
    </div>
  );
};

export default HomePage;