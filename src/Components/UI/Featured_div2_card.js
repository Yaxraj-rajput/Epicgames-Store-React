import React from "react";
import Wishlist_btn from "./Wishlist_btn";

const Featured_div2_card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image}></img>
        {props.Link === "Browse" ? "" : <Wishlist_btn />}
        {props.Link === "Browse" ? (
          ""
        ) : (
          <div className="label">Deals Of The Week</div>
        )}
      </div>
      <div className="card-title">{props.title}</div>

      {props.Link === "Browse" ? (
        <span className="link">{props.Link}</span>
      ) : (
        <div className="card-price">
          <span className="discount-card">-80%</span>
          <span className="price-before">₹{props.price_before}</span>
          <span className="price">₹{props.price}</span>
        </div>
      )}
    </div>
  );
};

export default Featured_div2_card;
