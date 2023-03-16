import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./components/browse";
import "typeface-lato";
import "typeface-inter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/browse" element={<Browse />}></Route>
    </Routes>
  </BrowserRouter>
);
