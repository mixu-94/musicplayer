import "./App.css";
import Card from "./components/Card/Card";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <main>
          <Card />
          <MusicPlayer />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
