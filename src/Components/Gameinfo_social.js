import React from "react";
import Game_info_title from "./UI/Game_info_title";

const Gameinfo_social = () => {
  return (
    <div className="Gameinfo_social">
      <Game_info_title
        title="Follow Us"
        style={{ fontSize: "1.3rem", fontWeight: "lighter" }}
      />
      <div className="social-links">
        <i className="fab fa-facebook-f"></i>

        <i className="fab fa-twitter"></i>

        <i className="fab fa-instagram"></i>

        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default Gameinfo_social;
