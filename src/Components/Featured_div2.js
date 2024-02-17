import React from "react";
import Featured_div2_card from "./UI/Featured_div2_card";

const Featured_div2 = ({ card }) => {
  return (
    <div className="Featured_div2">
      <div className="cards">
        {card.map((card, i) => (
          <Featured_div2_card
            key={i}
            title={card.title}
            discount={card.discount}
            price_before={card.price_before}
            price={card.price}
            Link={card.Link}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured_div2;
