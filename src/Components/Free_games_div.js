import React from "react";
import gift_icon from "../Assets/Images/elements/gift.png";
import Free_games_card from "./UI/Free_games_card";
import Div_top_bar from "./UI/Div_top_bar";

const Free_games_div = ({ card }) => {
  return (
    <div className="Free_games_div">
      <Div_top_bar />
      <div className="cards">
        {card.map((card, i) => (
          <Free_games_card
            key={i}
            title={card.title}
            price={card.price}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Free_games_div;
