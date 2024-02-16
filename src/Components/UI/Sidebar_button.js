import React from "react";
// import unreal_logo from "../elements/unreal_engine.png";
// import library_logo from "../elements/library.png";
// import tag from "../elements/library.png";

const Sidebar_button = (props) => {
  return (
    <a href="#" className="sidebar-button">
      <li className={props.active === "true" ? "active" : ""}>
        <img className="btn-icon " src={props.icon} alt="button icon" />
        <span>{props.title}</span>
      </li>
    </a>
  );
};

export default Sidebar_button;
