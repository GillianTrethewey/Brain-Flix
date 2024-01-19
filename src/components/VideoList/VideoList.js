import './VideoList.scss';
import Video from "../Video/Video.js";

const VideoList = () => {
  return (
    <section classList="videos__container">
      <ul classList="videos__list">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </ul>
    </section>
  )
}

export default VideoList;