import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeroVideo from "../../components/HeroVideo/HeroVideo.js";
import VideoDesc from "../../components/VideoDesc/VideoDesc.js";
import Comments from "../../components/Comments/Comments.js";
import VideoList from "../../components/VideoList/VideoList.js";

export const HomePage = () => {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { videoId } = useParams();
  const baseURL = "http://localhost:8000";

  useEffect(() => {
    const getVideoList = async () => {
      try {
        let getVideoUrl = baseURL + "/videos";
        const response = await axios.get(getVideoUrl);
        setVideoList(response.data);
      } catch (error) {
        console.log("Failed to get video list:", error);
      }
    };

    getVideoList();
  }, []);

  useEffect(() => {
    const getCurrentVideo = async () => {
      let getId =
        (videoList &&
          videoList.filter((video) => video.id === videoId).length > 0 &&
          videoId) ||
        (videoList[0] && videoList[0].id);

      if (getId) {
        try {
          let getIdUrl = baseURL + "/videos/" + getId;
          const response = await axios.get(getIdUrl);
          setCurrentVideo(response.data);
        } catch (error) {
          console.log("Failed to get current video details:", error);
        }
      }
    };

    getCurrentVideo();
  }, [videoId, videoList]);

  return (
    <main>
      {currentVideo && <HeroVideo currentVideo={currentVideo} />}

      <div className="main__contents">
        <section className="desc-comments__container">
          {currentVideo && <VideoDesc currentVideo={currentVideo} />}

          {currentVideo && <Comments currentVideo={currentVideo} />}
        </section>

        <section className="flex-video__container">
          {videoList && currentVideo && (
            <VideoList
              setVideoList={setVideoList}
              currentVideo={currentVideo}
              videoList={videoList}
            />
          )}
        </section>
      </div>
    </main>
  );
};
