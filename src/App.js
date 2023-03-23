import React from "react";
import Browse from "./pages/Browse";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-lato";
import "typeface-inter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
