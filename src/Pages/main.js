import React from "react";
import "../Styles/style.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Discover from "./Discover";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gameinfo from "./Gameinfo";

const main = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-div-main">
        {" "}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/gameinfo" element={<Gameinfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default main;
