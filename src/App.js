import "./App.css";
import Card from "./components/Card/Card";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar/>
      {/* <Card />
      <MusicPlayer /> */}
    </div>
  );
}

export default App;
