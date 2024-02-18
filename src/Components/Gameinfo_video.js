import React from "react";
import angle_arrow from "../Assets/Images/elements/angle-arrow.png";

const Gameinfo_video = () => {
  return (
    <div className="Gameinfo_video_main">
      <div className="Gameinfo_video">
        <div className="controls">
          <div className="left">
            <img src={angle_arrow}></img>
          </div>
          <div className="right">
            <img src={angle_arrow}></img>
          </div>
        </div>
        <iframe
          src="https://player.vimeo.com/video/734629970?h=64b994b25b&autoplay=1&loop=1&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
    </div>
  );
};

export default Gameinfo_video;
