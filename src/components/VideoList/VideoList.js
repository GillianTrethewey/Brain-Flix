import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = ({ alterVideo, videoData, currentVideo }) => {
  // const updateCurrentVideo = (id) => {
  //   const newCurrentVideo = videoData.find((video) => video.id === id);
  //   setCurrentVideo(newCurrentVideo);
  // };

  return (
    <section className="video-list__container">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      <div className="video-list">
        {videoData.map((video) => {
          return (
            video.id !== currentVideo.id && (
              <Video
                key={video.id}
                onClick={() => alterVideo(video.id)}
                image={video.image}
                title={video.title}
                channel={video.channel}
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
