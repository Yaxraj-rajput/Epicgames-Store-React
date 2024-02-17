import React from "react";

const Featured_div1_card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image}></img>
      </div>
      <span className="type">{props.type}</span>
      <div className="card-title">{props.title}</div>
      <div className="card-price">
        <span className="discount-card">-{props.discount}%</span>
        <span className="price-before">₹{props.price_before}</span>
        <span className="price">₹{props.price}</span>
      </div>
    </div>
  );
};

export default Featured_div1_card;
