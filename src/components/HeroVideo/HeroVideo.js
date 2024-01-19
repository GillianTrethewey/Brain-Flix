import "./HeroVideo.scss";

const HeroVideo = () => {
  return (
    <section className="hero-video__container">
      <video
        className="hero-video"
        controls
        alt="featured video section"
        poster="https://project-2-api.herokuapp.com/images/image0.jpg"></video>
    </section>
  );
};

export default HeroVideo;
