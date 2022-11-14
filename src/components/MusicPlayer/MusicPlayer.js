import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicPlayer.css";
const MusicPlayer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
    )
      .then((response) => response.json())
      .then((response) => setData(response.tracks))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player-wrapper">
      {data.map((item) => (
        <div id="player-control">
          <div key={item.albumId}>{`Artist Name: ${item.artistName}`}</div>
          <div key={item.albumId}>{`Artist Album: ${item.albumName}`}</div>
          <AudioPlayer
            src={item.previewURL}
            onPlay={(e) => console.log("onPlay")}
          />
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;
