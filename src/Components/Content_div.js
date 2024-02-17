import React from "react";
import Content_div_hero from "./Content_div_hero";
import Featured_div1 from "./Featured_div1";
import Featured_div2 from "./Featured_div2";
import Free_games_div from "./Free_games_div";
import Featured_div3 from "./Featured_div3";
import {
  cards_data,
  cards_data2,
  cards_data3,
  cards_data4,
  cards_data_hero,
} from "../json/data";

const Content_div = () => {
  return (
    <div className="content_div">
      <Content_div_hero card={cards_data_hero} />
      <Featured_div1 card={cards_data2} />
      <Featured_div2 card={cards_data3} />
      <Free_games_div card={cards_data4} />
      <Featured_div1 card={cards_data} topbar="1" />
      <Featured_div3 />
    </div>
  );
};

export default Content_div;
