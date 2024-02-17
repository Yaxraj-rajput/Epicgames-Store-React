import React from "react";
import Div_top_bar from "./Div_top_bar";
import Featured_div3_card from "./Featured_div3_card";

const Featured_div3_section = () => {
  return (
    <div className="Featured_div3_section">
      <Div_top_bar />
      <div className="cards">
        <Featured_div3_card />
        <Featured_div3_card />
        <Featured_div3_card />
        <Featured_div3_card />
        <Featured_div3_card />
      </div>
    </div>
  );
};

export default Featured_div3_section;
