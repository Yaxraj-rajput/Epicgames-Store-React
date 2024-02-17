import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Content_div_hero_button from "./UI/content_div_hero_button";
import add_btn from "../Assets/Images/elements/add.png";

const Content_div_hero = ({ card }) => {
  const [selectedCard, setSelectedCard] = useState(card[0]); // default to the first card

  const handleButtonClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="content_div_hero">
      <div className="left">
        <TransitionGroup>
          <CSSTransition
            key={selectedCard.title}
            timeout={500}
            classNames="fade"
          >
            <img
              className="background-image"
              src={selectedCard.poster_image}
            ></img>
          </CSSTransition>
          <CSSTransition
            key={selectedCard.title + "content"}
            timeout={500}
            classNames="slide"
          >
            <div className="content">
              <img className="title-logo" src={selectedCard.logo}></img>
              <span className="status">{selectedCard.status}</span>
              <p className="description">{selectedCard.description}</p>
              <div className="purchase-div">
                <span className="price">{selectedCard.price}</span>
                <div className="buttons">
                  <button className="buy-btn">Buy Now</button>
                  <button className="wishlist-btn">
                    <img src={add_btn}></img>Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="right">
        {card.map((card, i) => (
          <Content_div_hero_button
            key={i}
            title={card.title}
            image={card.image}
            onClick={() => handleButtonClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default Content_div_hero;
