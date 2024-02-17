import React from "react";

const content_div_hero_button = (props) => {
  return (
    <a href="#" onClick={props.onClick}>
      <div className="button">
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        {props.title}
      </div>
    </a>
  );
};

export default content_div_hero_button;
