import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Browse from "./pages/Browse";
import Registration from "./pages/Registration";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import UserPageFollowers from "./pages/UserPageFollowers";
import UserPageFollowing from "./pages/UserPageFollowing";
import UserPageRecipes from "./pages/UserPageRecipes";
import UserPageReviews from "./pages/UserPageReviews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/user/followers" element={<UserPageFollowers />}></Route>
        <Route path="/user/following" element={<UserPageFollowing />}></Route>
        <Route path="/user/recipes" element={<UserPageRecipes />}></Route>
        <Route path="/user/reviews" element={<UserPageReviews />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
