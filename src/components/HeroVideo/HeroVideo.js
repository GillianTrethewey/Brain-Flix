import "./HeroVideo.scss";

const HeroVideo = () => {
  return (
    <section className="hero-video__container">
      <video
        width="100%"
        className="hero-video"
        controls
        alt="featured video section"
        poster="https://project-2-api.herokuapp.com/images/image0.jpg">
          <source src="" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
    </section>
  );
};

export default HeroVideo;
