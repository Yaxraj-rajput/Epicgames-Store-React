import React from "react";
import Featured_div1_card from "./UI/Featured_div1_card";
import Div_top_bar_2 from "./UI/Div_top_bar_2";
import Div_top_bar from "./UI/Div_top_bar";

const Featured_div1 = ({ topbar, card, title }) => {
  return (
    <div className="Featured_div1">
      {topbar === "1" ? (
        <Div_top_bar title={title} />
      ) : (
        <Div_top_bar_2 title={title} />
      )}
      <div className="cards">
        {card.map((card, i) => (
          <Featured_div1_card
            key={i}
            title={card.title}
            discount={card.discount}
            price_before={card.price_before}
            price={card.price}
            type={card.type}
            Link={card.Link}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured_div1;
