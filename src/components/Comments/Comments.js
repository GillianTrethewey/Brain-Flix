import "./Comments.scss";
import avatarImg from "../../assets/images/avatar/Mohan-muruge.jpg";
import Button from "../Button/Button.js";
import Comment from "../Comment/Comment.js";

const Comments = () => {
  return (
    <section className="comments">
      <h4 className="comments__count">3 Comments</h4>
      <div className="comments__container">
        <form className="comments__form" action="" method="post">
          <div className="comments__group--form">
            <div className="comments__photo-container">
              <img
                className="comments__photo--form"
                src={avatarImg}
                alt="avatar"
              />
            </div>
            <div className="comments__form-details">
              <div className="comments__form-input-wrapper">
                <label className="comments__label" htmlFor="comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="comments__textarea"
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="5"
                  placeholder="Add a new comment"></textarea>
              </div>
              <div className="comments__button-container">
                <Button
                  btnClassName="button--submit"
                  btnType="submit"
                  btnLabel="COMMENT"
                />
              </div>
            </div>
          </div>
        </form>

        <section className="comments__list">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </section>
      </div>
    </section>
  );
};

export default Comments;
