import "./VideoDesc.scss";
import likesIcon from "../../assets/images/icons/likes.svg";
import viewsIcon from "../../assets/images/icons/views.svg";

const VideoDesc = ({ currentVideo }) => {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

  return (
    <section className="video-desc__description-container">
      <div className="video-desc__title-stats-container">
        <h1 className="video-desc__title">{title}</h1>
        <div className="video-desc__stats">
          <div className="video-desc__author-date-container">
            <p className="video-desc__author">By {channel}</p>
            <p className="video-desc__date">{timestamp}</p>
          </div>
          <div className="video-desc__views-hearts-container">
            <div className="video-desc__views-container">
              <img
                className="video-desc__views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="video-desc__views-stats">{views}</p>
            </div>
            <div className="video-desc__likes-container">
              <img
                className="video-desc__likes-icon"
                src={likesIcon}
                alt="heart icon"
              />
              <p className="video-desc__likes-stats">{likes}</p>
            </div>
          </div>
        </div>

        <div className="video-desc__description">{description}</div>
      </div>
    </section>
  );
};

export default VideoDesc;
