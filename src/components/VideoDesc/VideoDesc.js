import "./VideoDesc.scss";
import closeFullScreenIcon from "../../assets/images/icons/close_fullscreen.svg";
import fullscreenIcon from "../../assets/images/icons/fullscreen.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import pauseIcon from "../../assets/images/icons/pause.svg";
import playIcon from "../../assets/images/icons/play.svg";
import scrubIcon from "../../assets/images/icons/scrub.svg";
import viewsIcon from "../../assets/images/icons/views.svg";
import volumeOffIcon from "../../assets/images/icons/volume_off.svg";
import volumeUpIcon from "../../assets/images/icons/volume_up.svg";

const VideoDesc = () => {
  return (
    <section className="video__description-container">
      <div className="video__title-stats-container">
        <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video__stats">
          <div className="video__author-date-container">
            <p className="video__author">By Red Crow</p>
            <p className="video__date">07/11/2021</p>
          </div>
          <div className="video__views-hearts-container">
            <div className="video__views-container">
              <img
                className="video__views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="video__views-stats">1,001,023</p>
            </div>
            <div className="video__likes-container">
              <img
                className="video__likes-icon"
                src={likesIcon}
                alt="heart icon"
              />
              <p className="video__likes-stats">110,985</p>
            </div>
          </div>
        </div>

        <div className="video__description">
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
