import "./Comments.scss";
import avatarImg from "../../assets/images/avatar/Mohan-muruge.jpg";

const Comments = () => {
  return (
    <section class="comments">
      <h2 class="comments__title">Join the Conversation</h2>
      <div class="comments__container">
        <form class="comment__form" action="" method="post">
          <div class="comment__group--form">
            <div class="comment__photo-container">
              <img
                class="comment__photo--form"
                src={avatarImg}
                alt="avatar image"
              />
            </div>
            <div class="comment__form-details">
              <label class="comment__label" for="comment">
                COMMENT
              </label>
              <textarea
                class="comment__textarea"
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                placeholder="Add a new comment"></textarea>
              <div class="comment__button-container">
                <button class="comment__button" type="submit">
                  COMMENT
                </button>
              </div>
            </div>
          </div>
        </form>

        <section class="comments__list"></section>
      </div>
    </section>
  );
};

export default Comments;
