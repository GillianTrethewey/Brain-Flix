import "./VideoDesc.scss";
import likesIcon from "../../assets/images/icons/likes.svg";
import viewsIcon from "../../assets/images/icons/views.svg";


const VideoDesc = () => {
  return (
    <section className="video-desc__description-container">
      <div className="video-desc__title-stats-container">
        <h1 className="video-desc__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video-desc__stats">
          <div className="video-desc__author-date-container">
            <p className="video-desc__author">By Red Crow</p>
            <p className="video-desc__date">07/11/2021</p>
          </div>
          <div className="video-desc__views-hearts-container">
            <div className="video-desc__views-container">
              <img
                className="video-desc__views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="video-desc__views-stats">1,001,023</p>
            </div>
            <div className="video-desc__likes-container">
              <img
                className="video-desc__likes-icon"
                src={likesIcon}
                alt="heart icon"
              />
              <p className="video-desc__likes-stats">110,985</p>
            </div>
          </div>
        </div>

        <div className="video-desc__description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </div>
      </div>
    </section>
  );
};

export default VideoDesc;
