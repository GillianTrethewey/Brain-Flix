import "./VideoList.scss";
import Video from "../Video/Video.js";

const VideoList = () => {
  return (
    <section classList="videos__container">
      <h2 classList="videos__title">NEXT VIDEOS</h2>
      <ul classList="videos__list">
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
