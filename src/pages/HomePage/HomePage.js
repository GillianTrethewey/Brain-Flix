import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeroVideo from "../../components/HeroVideo/HeroVideo.js";
import VideoDesc from "../../components/VideoDesc/VideoDesc.js";
import Comments from "../../components/Comments/Comments.js";
import VideoList from "../../components/VideoList/VideoList.js";

export const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const { videoId } = useParams();

  const getVideoList = async () => {
    try {
      const apiKey = "9ca27ce3-997b-42d0-b509-0a904b438fce";
      const baseURL = "https://project-2-api.herokuapp.com";
      let URL = baseURL + "/videos?api_key=" + apiKey;
      const response = await axios.get(URL);
      setVideoList(response.data);
    } catch (error) {
      console.log("Failed to get video list:", error);
    }
  };

  useEffect(() => {
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
          const apiKey = "9ca27ce3-997b-42d0-b509-0a904b438fce";
          const baseURL = "https://project-2-api.herokuapp.com";
          let URL = baseURL + "/videos/" + getId + "?api_key=" + apiKey;
          const response = await axios.get(URL);
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
          {currentVideo && (
            <VideoList currentVideo={currentVideo} videoList={videoList} />
          )}
        </section>
      </div>
    </main>
  );
};
