import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = ({ setCurrVideo, videoData, currVideo }) => {
  const changeCurrVideo = (id) => {
    const newFeatVideo = videoData.find((video) => video.id === id);
    setCurrVideo(newFeatVideo);
  };

  return (
    <section className="video-list__container">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      <div class="video-list">
        {videoData.map((video) => {
          return (
            video.id !== currVideo.id && (
              <Video
                key={video.id}
                video={video}
                onClick={() => changeCurrVideo(video.id)}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

export default VideoList;

//        .filter((video) => video.id !== props.displayContent.id)
