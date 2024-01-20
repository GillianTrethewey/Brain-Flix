import './Video.scss';

const Video = () => {
  return (
    <li class="video__item">
      <div class="video__container">
        <img class='video__image' src="https://project-2-api.herokuapp.com/images/image8.jpg" alt="Next Video 1"></img>
      </div>
      <div class="video__text-container">
        <p class="video__title">Become A Travel Pro In One Easy Lesson</p>
        <p class="video__author">Todd Welch</p>
      </div>
  </li>
  )
}

export default Video;