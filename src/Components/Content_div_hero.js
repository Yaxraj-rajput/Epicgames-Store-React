import React from "react";
import Content_div_hero_button from "./UI/content_div_hero_button";
import add_btn from "../Assets/Images/elements/add.png";

const Content_div_hero = () => {
  return (
    <div className="content_div_hero">
      <div className="left">
        <img src="https://cdn.mos.cms.futurecdn.net/JvykCCUpt7pgRVDAq4ymTQ.jpg"></img>
        <div className="content">
          <img
            className="title-logo"
            src="https://i0.wp.com/lev3lup.be/wp-content/uploads/2023/08/Logo_HW3_Black.png?fit=3000%2C3000&ssl=1"
          ></img>
          <span className="status">Out Now</span>
          <p className="description">
            Dash Into Stylish And thrilling Adventure where each choice has its
            own outcomes.
          </p>
          <div className="purchase-div">
            <span className="price">Starting At ₹999</span>
            <div className="buttons">
              <button className="buy-btn">Buy Now</button>
              <button className="wishlist-btn">
                <img src={add_btn}></img>Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <Content_div_hero_button />
        <Content_div_hero_button />
        <Content_div_hero_button />
        <Content_div_hero_button />
        <Content_div_hero_button />
        <Content_div_hero_button />
      </div>
    </div>
  );
};

export default Content_div_hero;
