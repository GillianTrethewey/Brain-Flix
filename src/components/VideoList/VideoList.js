import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = ({ updateVideo, videoData, currentVideo }) => {
  return (
    <section className="video-list__container">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {videoData.map((video) => {
          return (
            video.id !== currentVideo.id && (
              <Video
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
                updateVideo={updateVideo}
              />
            )
          );
        })}
      </ul>
    </section>
  );
};

export default VideoList;
