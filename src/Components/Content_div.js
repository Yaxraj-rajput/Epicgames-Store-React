import React from "react";
import Content_div_hero from "./Content_div_hero";
import Featured_div1 from "./Featured_div1";
import Featured_div2 from "./Featured_div2";
import Free_games_div from "./Free_games_div";

const Content_div = () => {
  return (
    <div className="content_div">
      <Content_div_hero />
      <Featured_div1 cardCount={6} />
      <Featured_div2 />
      <Free_games_div />
      <Featured_div1 cardCount={3} topbar="1" />
    </div>
  );
};

export default Content_div;
