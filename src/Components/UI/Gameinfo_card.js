import React from "react";

const Gameinfo_card = ({ title, links }) => {
  return (
    <div className="Gameinfo_card">
      <span className="title">{title}</span>
      <div className="links">
        {links.map((link, index) => (
          <a key={index} href={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gameinfo_card;
