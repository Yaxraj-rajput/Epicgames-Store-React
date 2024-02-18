import React from "react";
import star_full from "../Assets/Images/elements/star_full.png";
import star_half from "../Assets/Images/elements/star_half.png";

const Gameinfo_title_bar = () => {
  return (
    <div className="Gameinfo_title_bar">
      <h1 className="title">Skull and Bones</h1>

      <div className="description">
        <div className="rating">
          <div className="stars">
            <img src={star_full}></img>
            <img src={star_full}></img>
            <img src={star_full}></img>
            <img src={star_full}></img>
            <img src={star_half}></img>
          </div>
          <div className="number">4.2</div>
        </div>

        <div className="highlight">
          <span>🦖Great Boss Battles</span>
        </div>
      </div>
    </div>
  );
};

export default Gameinfo_title_bar;
