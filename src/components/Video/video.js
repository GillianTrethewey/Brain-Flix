import './Video.scss';

const Video = () => {
  return (
    <li className="video__item">
      <div className="video__container">
        <img className='video__image' src="https://project-2-api.herokuapp.com/images/image8.jpg" alt="Next Video 1"></img>
      </div>
      <div className="video__text-container">
        <p className="video__title">Become A Travel Pro In One Easy Lesson</p>
        <p className="video__author">Todd Welch</p>
      </div>
  </li>
  )
}

export default Video;