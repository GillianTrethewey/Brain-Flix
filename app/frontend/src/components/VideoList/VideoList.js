import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = ({ videoList, currentVideo }) => {
  return (
    <section className="video-list__container">
      <h2 className="video-list__title">NEXT VIDEOS</h2>

      <ul className="video-list">
        {videoList
          .filter((video) => video.id !== currentVideo.id)
          .map((video) => (
            <Video
              key={video.id}
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          ))}
      </ul>
    </section>
  );
};

export default VideoList;
