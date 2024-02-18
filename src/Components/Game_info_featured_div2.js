import React from "react";
import Game_info_title from "./UI/Game_info_title";
import Gameinfo_featureddiv2_card from "./UI/Gameinfo_featureddiv2_card";

const Game_info_featured_div2 = () => {
  return (
    <div className="Game_info_featured_div2">
      <Game_info_title
        title="Skull and Bones Editions"
        style={{
          fontSize: "1.3rem",
          fontWeight: "lighter",
          letterSpacing: "1px",
        }}
      />
      <Gameinfo_featureddiv2_card />
      <Gameinfo_featureddiv2_card />
      <Gameinfo_featureddiv2_card />
    </div>
  );
};

export default Game_info_featured_div2;
