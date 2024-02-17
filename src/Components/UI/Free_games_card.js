import React from "react";

const Free_games_card = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image}></img>
      </div>
      <div className="details">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Free_games_card;
