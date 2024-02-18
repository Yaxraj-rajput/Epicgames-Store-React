import React, { useState } from "react";
import angle_arrow from "../Assets/Images/elements/angle-arrow.png";

const Gameinfo_video = () => {
  const content = [
    {
      type: "video",
      src: "https://player.vimeo.com/video/734629970?h=64b994b25b&autoplay=1&loop=1&title=0&byline=0&portrait=0",
    },
    {
      type: "image",
      src: "https://assets-prd.ignimgs.com/2023/08/16/skullandbonesthumb-1692204322124.jpg?width=1280",
    },
    {
      type: "image",
      src: "https://esi.si.com/.image/t_share/MjA0MjI4MzMzMTA4NDcxNjkz/skull-and-bones-ubisoft-pirate.png",
    },
    {
      type: "image",
      src: "https://cdn.sortiraparis.com/images/80/88384/642962-skull-and-bones-le-jeu-rpg-de-pirates-d-ubisoft-attendu-entre-2022-et-2023.jpg",
    },
    {
      type: "image",
      src: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6RZNIV1PzuUJ5408GyGXY1/db3dd80f6299c1cf4134f13211a668c7/Hero-fallback-desktop.jpg",
    },
    {
      type: "image",
      src: "https://cdn.mos.cms.futurecdn.net/mMbwoLtdkfJ8Fcf86MpgjR-1200-80.jpg",
    },
    {
      type: "image",
      src: "https://assetsio.reedpopcdn.com/ubisofts-open-world-pirate-adventure-skull-and-bones-has-been-delayed-again-1557938696436.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    },
  ];

  const [selectedContent, setSelectedContent] = useState(content[0]);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="Gameinfo_video_main">
      <div className="Gameinfo_video">
        {selectedContent.type === "video" ? (
          <iframe
            src={selectedContent.src}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={selectedContent.src} />
        )}
        <div className="controls">
          <div className="arrow-left">
            <img src={angle_arrow}></img>
          </div>
          <div className="arrow-right">
            <img src={angle_arrow}></img>
          </div>
        </div>
      </div>
      <div className="slider">
        {content.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              onClick={() => handleContentClick(item)}
            >
              <img src={item.src}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gameinfo_video;
