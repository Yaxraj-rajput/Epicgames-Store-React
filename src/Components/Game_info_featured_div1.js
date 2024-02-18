import React, { useState } from "react";
import Game_info_title from "./UI/Game_info_title";

const Game_info_featured_div = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const style = {
    height: isExpanded ? "auto" : "23rem",
    overflow: isExpanded ? "visible" : "hidden",
    filter: isExpanded ? "brightness(1)" : "brightness(0.7)",
  };

  return (
    <div className="Game_info_featured_div">
      <Game_info_title
        title="SKULL AND BONES™"
        style={{
          fontSize: "1.1rem",
          fontWeight: "lighter",
          letterSpacing: "1px",
        }}
      />

      <div className="main-container">
        <div className="content" style={style}>
          <img src="https://cdn2.unrealengine.com/sb-mockup-grid-announce-wide-uk-1920x1080-981afc75942f.jpg"></img>
          <img src="https://cdn2.unrealengine.com/sab-ucs26147-productimage-1920x1080-ww-1920x1080-c5296ee2a2f4.jpg"></img>
          <ul>
            <li>
              Engage in thrilling naval battles and equip a multitude of
              powerful weapons as you risk it all for the biggest loot.
            </li>
            <li>
              Sail the lawless seas solo, or team up with two friends or other
              players to partake in shareable contracts and rewards.
            </li>
            <li>
              Face cutthroat pirate hunters, deadly sea monsters, unpredictable
              weather, dangerous rogue waves, supernatural threats, and more as
              you explore a vast open world.
            </li>
            <li>
              Craft and sail up to 10 different ships at launch, each with
              unique perks to match your own personal playstyle.
            </li>
            <li>
              Grow your infamy and unlock resources and opportunities to get
              riskier contracts and upgrade your equipment.
            </li>

            <span>
              Persistent internet connection and Ubisoft Account required.
            </span>
          </ul>
        </div>
        <button
          className="expend-btn"
          style={isExpanded ? { marginTop: "1rem" } : {}}
          onClick={handleClick}
        >
          {isExpanded ? (
            <>
              SHOW LESS <i className="fa-solid fa-angle-up"></i>
            </>
          ) : (
            <>
              SHOW MORE <i className="fa-solid fa-angle-down"></i>
            </>
          )}{" "}
        </button>
      </div>
    </div>
  );
};

export default Game_info_featured_div;
