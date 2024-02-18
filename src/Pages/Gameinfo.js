import React from "react";
import Gameinfo_title_bar from "../Components/Gameinfo_title_bar";
import Gameinfo_video from "../Components/Gameinfo_video";
import Gameinfo_card from "../Components/UI/Gameinfo_card";
import Devider from "../Components/UI/Devider";
import Wishlist_btn from "../Assets/Images/elements/wishlist.png";
import Game_info_featured_div1 from "../Components/Game_info_featured_div1";
import Game_info_featured_div2 from "../Components/Game_info_featured_div2";
import Gameinfo_social from "../Components/Gameinfo_social";

const Gameinfo = () => {
  return (
    <div className="Gameinfo_div_main">
      <div className="Gameinfo_div">
        {" "}
        <Gameinfo_title_bar />
        <div className="top">
          <div className="left">
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
            <Game_info_featured_div2 />

            <Gameinfo_social />
          </div>
          <div className="right">
            <div className="logo-div">
              <img src="https://cdn2.unrealengine.com/sab-logo-400x400-400x400-07b901f94834.png?h=270&quality=medium&resize=1&w=480"></img>
            </div>
            <div className="details-div">
              <span className="type">BASE GAME</span>
              <span className="price">₹2,999</span>
              <button className="buy_btn">BUY NOW</button>
              <button className="add_to_cart_btn">ADD TO CART</button>
              <button className="add_to_wishlist_btn">
                <img src={Wishlist_btn}></img> ADD TO WISHLIST
              </button>
              <div className="information">
                <div className="detail-card">
                  <span className="title">Epic Rewards</span>
                  <span className="value">Get 5% Back</span>
                </div>
                <div className="detail-card">
                  <span className="title">Refund Type</span>
                  <span className="value">Refundable</span>
                </div>
                <div className="detail-card">
                  <span className="title">Developer</span>
                  <span className="value">Ubisoft Singapore</span>
                </div>
                <div className="detail-card">
                  <span className="title">Publisher</span>
                  <span className="value">Ubisoft</span>
                </div>
                <div className="detail-card">
                  <span className="title">Release Date</span>
                  <span className="value">02/16/24</span>
                </div>
                <div className="detail-card">
                  <span className="title">Platform</span>
                  <span className="value">
                    <i class="fa-brands fa-windows"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gameinfo;
