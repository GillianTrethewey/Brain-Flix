import "./App.scss";
import Header from "./components/Header/Header.js";
import HeroVideo from "./components/HeroVideo/HeroVideo.js";
import VideoDesc from "./components/VideoDesc/VideoDesc.js";
import Comments from "./components/Comments/Comments.js";
import VideoList from "./components/VideoList/VideoList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroVideo />
        <div className="desc-comments__container">
          <VideoDesc />
          <Comments />
        </div>
        <VideoList />
      </main>
      <footer>&copy;2024</footer>
    </div>
  );
}

export default App;
