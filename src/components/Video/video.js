import "./Video.scss";

const Video = ({ image, title, channel }) => {
  return (
    <div className="video__item">
      <div className="video__container">
        <img className="video__image" src={image} alt="video thumbnail"></img>
      </div>
      <div className="video__text-container">
        <p className="video__title">{title}</p>
        <p className="video__author">{channel}</p>
      </div>
    </div>
  );
};

export default Video;
