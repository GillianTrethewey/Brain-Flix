import "./Video.scss";

const Video = ({ image, title, channel, id, updateVideo }) => {
  return (
    <li className="video__item" id={id} onClick={() => updateVideo(id)}>
      <div className="video__container">
        <img className="video__image" src={image} alt="video thumbnail"></img>
      </div>
      <div className="video__text-container">
        <p className="video__title">{title}</p>
        <p className="video__author">{channel}</p>
      </div>
    </li>
  );
};

export default Video;
