import React from "react";
import Content_div_hero from "../Components/Content_div_hero";
import Featured_div1 from "../Components/Featured_div1";
import Featured_div2 from "../Components/Featured_div2";
import Free_games_div from "../Components/Free_games_div";
import Featured_div3 from "../Components/Featured_div3";
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
      <Featured_div1 card={cards_data2} title="Featured Discounts" />
      <Featured_div2 card={cards_data3} />
      <Free_games_div card={cards_data4} title="Free Games" />
      <Featured_div1 card={cards_data} topbar="1" title="Most Selling" />
      <Featured_div3 />
    </div>
  );
};

export default Content_div;
