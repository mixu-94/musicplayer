import React from "react";

import "./MusicPlayer.css";

const MusicPlayer = () => {
  return (
    <div className="player-wrapper">
      <iframe
        title="deezer-widget"
        src="https://widget.deezer.com/widget/dark/playlist/4033789"
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
