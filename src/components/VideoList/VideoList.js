import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = () => {
  return (
    <section className="video-list__container">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </ul>
    </section>
  );
};

export default VideoList;
