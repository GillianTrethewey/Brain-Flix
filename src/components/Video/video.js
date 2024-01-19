import './Video.scss';

const Video = () => {
  return (
    <li class="videos-list__alignment">
    <div class="videos-list__container">
      <img class='videos-list__image' src="https://project-2-api.herokuapp.com/images/image8.jpg" alt="Next Video 1"></img>
    </div>
    <div class="videos-list__subcontainer">
      <p class="videos-list__title">Become A Travel Pro In One Easy Lesson</p>
      <p class="videos-list__author">Todd Welch</p>
    </div>
  </li>
  )
}

export default Video;