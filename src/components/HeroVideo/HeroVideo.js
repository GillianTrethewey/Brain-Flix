import "./HeroVideo.scss";

const HeroVideo = ({ currentVideo }) => {

  return (
    <section className="hero-video__container">
      <video
        width="100%"
        className="hero-video"
        controls
        alt="featured video section"
        poster={currentVideo?.image}>
      </video>
    </section>
  );
};

export default HeroVideo;
