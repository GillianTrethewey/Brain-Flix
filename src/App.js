import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import HeroVideo from "./components/HeroVideo/HeroVideo.js";
import VideoDesc from "./components/VideoDesc/VideoDesc.js";
import Comments from "./components/Comments/Comments.js";
import VideoList from "./components/VideoList/VideoList.js";
import jsonVideos from "./data/videos.json";
import jsonVideoDetails from "./data/video-details.json";

function App() {
  const [videoData, setVideoData] = useState(jsonVideos);
  const [currVideo, setCurrVideo] = useState(jsonVideoDetails[0]);

 const setCurrent = (clickedVideo) => {
    setCurrent(clickedVideo);
 }

  return (
    <div className="App">
      <Header />
      <main>
        <HeroVideo currVideo={currVideo} />

        <div className="main__contents">

          <section className="desc-comments__container">
            <VideoDesc 
            currVideo={currVideo}  />

            <Comments 
            comments={currVideo.comments}  />
          </section>

          <section className="flex-video__container">
            <VideoList 
            setCurrVideo={setCurrVideo}
            videoData={videoData}
            currVideo={currVideo} />
          </section>

        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
