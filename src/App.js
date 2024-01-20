import "./App.scss";
import { useState } from "react";

import Header from "./components/Header/Header.js";
import HeroVideo from "./components/HeroVideo/HeroVideo.js";
import VideoDesc from "./components/VideoDesc/VideoDesc.js";
import Comments from "./components/Comments/Comments.js";
import VideoList from "./components/VideoList/VideoList.js";

import videoDataJson from "./data/videos.json";
import currentVideoJson from "./data/video-details.json";

function App() {
  const [videoData, setVideoData] = useState(videoDataJson);
  const [currentVideo, setCurrentVideo] = useState(currentVideoJson[0]);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <HeroVideo currentVideo={currentVideo} />

        <div className="main__contents">
          <section className="desc-comments__container">
            <VideoDesc currentVideo={currentVideo} />

            <Comments comments={currentVideo.comments} />
          </section>

          <section className="flex-video__container">
            <VideoList
              alterVideo={alterVideo}
              videoData={videoData}
              currentVideo={currentVideo}
            />
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
