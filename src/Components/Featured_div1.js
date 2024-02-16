import React from "react";
import Featured_div1_card from "./UI/Featured_div1_card";
import Div_top_bar_2 from "./UI/Div_top_bar_2";
import Div_top_bar from "./UI/Div_top_bar";

const Featured_div1 = ({ cardCount, topbar }) => {
  const cards = [...Array(cardCount)].map((_, i) => (
    <Featured_div1_card key={i} />
  ));

  return (
    <div className="Featured_div1">
      {topbar === "1" ? <Div_top_bar /> : <Div_top_bar_2 />}
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Featured_div1;
