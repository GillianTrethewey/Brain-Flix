import "./Video.scss";
import { NavLink } from "react-router-dom";

const Video = ({ id, image, title, channel }) => {
  return (
    <NavLink to={`/videos/${id}`} className="navlink__item">
      <li key={id} className="video__item">
        <div className="video__container">
          <img className="video__image" src={image} alt="video thumbnail"></img>
        </div>
        <div className="video__text-container">
          <p className="video__title">{title}</p>
          <p className="video__author">{channel}</p>
        </div>
      </li>
    </NavLink>
  );
};

export default Video;
