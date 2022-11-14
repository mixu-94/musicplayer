import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card/Card";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  const [song, setSong] = useState("playlist/4033789");
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <main>
          <Card
            title="Blinding lights"
            artist="The Weeknd"
            setSong={setSong}
            link="https://www.theweeknd.com/sites/g/files/aaj15051/f/styles/suzuki_breakpoints_image_mobile-lg_sq/public/release/201609/818cf2dcae465de2c48c791829b1ca03606989a1?itok=BlI82QMA"
          />
          <Card
            title="Hello Dolly"
            artist="Luis Amstrong"
            setSong={setSong}
            link="https://m.media-amazon.com/images/I/51aYRhvSKWL.jpg"
          />
          <Card
            title="Holiday"
            artist="Madonna"
            setSong={setSong}
            link="https://i.discogs.com/nPSoMyImuB9qQkqZlItSvoHTWXLIpG30ohiNxgCzM5o/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNTY2/OTMtMTUxODM0MDgy/NS03MTgxLmpwZWc.jpeg"
          />
          <Card
            title="Vermilion"
            artist="Slipknot"
            setSong={setSong}
            link="https://cdn.quotesgram.com/img/27/66/1195727774-.jpg"
          />
          <MusicPlayer song={song} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
