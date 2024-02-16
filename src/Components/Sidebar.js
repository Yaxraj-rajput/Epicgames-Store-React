import React from "react";
import logo from "../Assets/Images/logo/epic_logo_white.png";
import Sidebar_button from "./UI/Sidebar_button";
import unreal_logo from "../Assets/Images/elements/unreal-engine.png";
import library_logo from "../Assets/Images/elements/grid.png";
import tag from "../Assets/Images/elements/price-tag.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="sidebar-buttons">
        <ul>
          <Sidebar_button title="Store" active="true" icon={tag} />
          <Sidebar_button title="Library" active="false" icon={library_logo} />
          <Sidebar_button
            title="Unreal Engine"
            active="false"
            icon={unreal_logo}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
