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
        <div className="main__contents">     
          <section className="desc-comments__container">
            <VideoDesc />
            <Comments />
          </section>
          <section className="flex-video__container">
            <VideoList />
          </section>
          </div>


      </main>
      <footer></footer>
    </div>
  );
}

export default App;
