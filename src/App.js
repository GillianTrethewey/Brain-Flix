import "./App.scss";
import { useState } from "react";

import Header from "./components/Header/Header.js";
import HeroVideo from "./components/HeroVideo/HeroVideo.js";
import VideoDesc from "./components/VideoDesc/VideoDesc.js";
import Comments from "./components/Comments/Comments.js";
import VideoList from "./components/VideoList/VideoList.js";

import videoDataJson from "./data/videos.json";
import videoDetailsJson from "./data/video-details.json";

function App() {
  const [videoData, setVideoData] = useState(videoDataJson);
  const [currentVideo, setCurrentVideo] = useState(videoDataJson[0]);
  const [currentVideoDetails, setCurrentVideoDetails] = useState(
    videoDetailsJson[0]
  );

  const updateVideo = (id) => {
    const newVideo = videoData.find((video) => video.id === id);
    setCurrentVideo(newVideo);
    setCurrentVideoDetails(videoDetailsJson.find((video) => video.id === id));
  };

  return (
    <div className="App">
      <Header />
      <main>
        {currentVideo && <HeroVideo currentVideo={currentVideo} />}

        <div className="main__contents">
          <section className="desc-comments__container">
            {currentVideoDetails && (
              <VideoDesc currentVideoDetails={currentVideoDetails} />
            )}

            {currentVideoDetails && (
              <Comments comments={currentVideoDetails.comments} />
            )}
          </section>

          <section className="flex-video__container">
            {videoData && currentVideo && (
              <VideoList
                updateVideo={updateVideo}
                videoData={videoData}
                currentVideo={currentVideo}
              />
            )}
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
