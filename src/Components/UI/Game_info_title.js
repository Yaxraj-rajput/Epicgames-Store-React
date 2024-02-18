import React from "react";

const Game_info_title = ({ title, style }) => {
  return (
    <div className="Game_info_title">
      <span style={style} className="title">
        {title}
      </span>
    </div>
  );
};

export default Game_info_title;
