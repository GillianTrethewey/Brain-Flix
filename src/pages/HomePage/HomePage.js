import "./HomePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HeroVideo from "../../components/HeroVideo/HeroVideo.js";
import VideoDesc from "../../components/VideoDesc/VideoDesc.js";
import Comments from "../../components/Comments/Comments.js";
import VideoList from "../../components/VideoList/VideoList.js";

const apiKey = "9ca27ce3-997b-42d0-b509-0a904b438fce";
const baseURL = "https://project-2-api.herokuapp.com";

export const HomePage = () => {
  const [videoData, setVideoData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [currentVideoDetails, setCurrentVideoDetails] = useState(videoData[0]);

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get(`${baseURL}/videos?api_key=${apiKey}`);
        setVideoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to get video data:", error);
      }
    };
    getVideoData(); 
  }, []);

  const { id } = useParams();

  useEffect(() => {
    let getId =
      (videoData &&
        videoData.filter((videoObj) => videoObj.id === id)?.length &&
        id) ||
      (videoData[0] && videoData[0].id);
  
    if (getId) {
      const getSelectedVideoData = async () => {
        try {
          const response = await axios.get(`${baseURL}/videos/${getId}`);
          console.log(response.data);
          setCurrentVideo(response.data);
        } catch (error) {
          console.error(`Failed to get video data for id ${getId}: ${error}`);
        }
      };
    }
  }, [id, videoData]);
  
  const updateCurrentVideo = async () => {
    try { 
        const response = await axios.get(`${baseURL}/videos/${currentVideo.id}`)
        setCurrentVideo(response.data);
      } catch(error) {
        console.log('Failed to update the current video: ', error);
    }
      };


  return (f
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
            <VideoList videoData={videoData} currentVideo={currentVideo} />
          )}
        </section>
      </div>
    </main>
  );
};
