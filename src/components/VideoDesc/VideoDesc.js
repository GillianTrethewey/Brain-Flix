import "./VideoDesc.scss";
import likesIcon from "../../assets/images/icons/likes.svg";
import viewsIcon from "../../assets/images/icons/views.svg";


const VideoDesc = ({currVideo}) => {
  console.log(currVideo)
  return (
    <section className="video-desc__description-container">
      <div className="video-desc__title-stats-container">
        <h1 className="video-desc__title">{currVideo.title}</h1>
        <div className="video-desc__stats">
          <div className="video-desc__author-date-container">
            <p className="video-desc__author">By {currVideo.channel}</p>
            <p className="video-desc__date">{currVideo.timestamp}</p>
          </div>
          <div className="video-desc__views-hearts-container">
            <div className="video-desc__views-container">
              <img
                className="video-desc__views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="video-desc__views-stats">{currVideo.views}</p>
            </div>
            <div className="video-desc__likes-container">
              <img
                className="video-desc__likes-icon"
                src={likesIcon}
                alt="heart icon"
              />
              <p className="video-desc__likes-stats">{currVideo.likes}</p>
            </div>
          </div>
        </div>

        <div className="video-desc__description">
          {currVideo.description}
        </div>
      </div>
    </section>
  );
};

export default VideoDesc;
