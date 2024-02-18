import React from "react";
import Gameinfo_title_bar from "../Components/Gameinfo_title_bar";
import Gameinfo_video from "../Components/Gameinfo_video";
import Gameinfo_card from "../Components/UI/Gameinfo_card";
import Devider from "../Components/UI/Devider";
import Game_info_featured_div1 from "../Components/Game_info_featured_div1";

const Gameinfo = () => {
  return (
    <div className="Gameinfo_div_main">
      <div className="Gameinfo_div">
        <div className="top">
          <div className="left">
            <Gameinfo_title_bar />
            <Gameinfo_video />
            <div className="description-div">
              <p>
                Enter the perilous world of Skull and Bones, a co-op pirate open
                world action-RPG experience, to become the most infamous pirate
                kingpin! Engage in thrilling naval battles, craft a variety of
                unique ships, forge unlikely alliances as you overcome the odds,
                and bring mayhem on the seas. Be part of an immersive world that
                introduces new challenges and features every season.
              </p>
            </div>

            <div className="details-div">
              <Devider />
              <Gameinfo_card title="genres" links={["Action", "Adventure"]} />
              <Devider />

              <Gameinfo_card
                title="Features"
                links={["CO OP", "Singleplayer", "Multiplayer"]}
              />
            </div>

            <Game_info_featured_div1 />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Gameinfo;
