import React from "react";
import "../Styles/style.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Content_div from "../Components/Content_div";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content-div-main">
        {" "}
        <Navbar />
        <Content_div />
      </div>
    </div>
  );
};

export default Home;
