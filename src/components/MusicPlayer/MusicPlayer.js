import React from "react";

import "./MusicPlayer.css";

const MusicPlayer = ({song}) => {
  return (
    <div className="player-wrapper">
      <h1>test</h1>
      <iframe
        title="deezer-widget"
        src={`https://widget.deezer.com/widget/dark/${song}`}
        //last two parts can be variable
        width="100%"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media; clipboard-write"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
