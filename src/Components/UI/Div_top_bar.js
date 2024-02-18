import React from "react";

const Div_top_bar = (props) => {
  return (
    <div className="topbar">
      <h1 className="title">{props.title}</h1>
      <button className="view-more">View More</button>
    </div>
  );
};

export default Div_top_bar;
