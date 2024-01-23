import './HomePage.scss';
import { useState, useEffect } from "react";

import HeroVideo from "../../components/HeroVideo/HeroVideo.js";
import VideoDesc from "../../components/VideoDesc/VideoDesc.js";
import Comments from "../../components/Comments/Comments.js";
import VideoList from "../../components/VideoList/VideoList.js";

import videoDataJson from "../../data/videos.json";
import videoDetailsJson from "../../data/video-details.json";


const apiKey = "9ca27ce3-997b-42d0-b509-0a904b438fce";
const URL = "https://project-2-api.herokuapp.com";

export const HomePage = () => {

    const [videoData, setVideoData] = useState(videoDataJson);
    const [currentVideo, setCurrentVideo] = useState(videoDataJson[0]);
    const [currentVideoDetails, setCurrentVideoDetails] = useState(videoDetailsJson[0]
    );

    const updateVideo = (id) => {
        const newVideo = videoData.find((video) => video.id === id);
        setCurrentVideo(newVideo);
        setCurrentVideoDetails(videoDetailsJson.find((video) => video.id === id));
      };

  return (
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
  )
}
