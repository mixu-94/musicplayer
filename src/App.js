import "./App.css";
import Card from "./components/Card";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Header from "./components/Header/Header"
function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <MusicPlayer />
    </div>
  );
}

