import "./HeroVideo.scss";
const Url = process.env.REACT_APP_API_URL;

const HeroVideo = ({ currentVideo }) => {
  return (
    <section className="hero-video__container">
      <video
        width="100%"
        className="hero-video"
        controls
        alt="featured video section"
        poster={`${Url}/images/${currentVideo?.image}`}></video>
    </section>
  );
};

export default HeroVideo;
