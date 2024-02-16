import React from "react";
import gift_icon from "../Assets/Images/elements/gift.png";
import Free_games_card from "./UI/Free_games_card";
import Div_top_bar from "./UI/Div_top_bar";

const Free_games_div = () => {
  return (
    <div className="Free_games_div">
      <Div_top_bar />
      <div className="cards">
        <Free_games_card />
        <Free_games_card />
        <Free_games_card />
      </div>
    </div>
  );
};

export default Free_games_div;
