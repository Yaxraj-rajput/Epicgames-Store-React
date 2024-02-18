import React from "react";

const Div_top_bar_2 = (props) => {
  return (
    <div className="topbar2">
      <span className="title">
        {props.title} <i class="fa-solid fa-angle-right"></i>
      </span>
      <div className="navigation-btn">
        <button className="prev-btn">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button className="next-btn">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Div_top_bar_2;
