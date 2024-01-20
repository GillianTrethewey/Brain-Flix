import './Video.scss';

const Video = ({video}) => {
  return (
  <div className="video__item">
      <div className="video__container">
        <img className='video__image' src={video.image} alt="video thumbnail"></img>
      </div>
      <div className="video__text-container">
        <p className="video__title">{video.title}</p>
        <p className="video__author">{video.channel}</p>
      </div>
</div>
  )
}

export default Video;