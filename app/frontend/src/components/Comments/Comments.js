import "./Comments.scss";
import avatarImg from "../../assets/images/avatar/Mohan-muruge.jpg";
import Button from "../Button/Button.js";
import Comment from "../Comment/Comment.js";

const Comments = ({ currentVideo }) => {
  const comments = currentVideo.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  
  const handleSubmitComment = (event) => {
    event.preventDefault();
    alert("Thank you for submitting your comment!");
  };
  return (
    <section className="comments">
      <h4 className="comments__count">{comments.length} Comments</h4>
      <div className="comments__container">
        <form
          className="comments__form"
          action=""
          method="post"
          onSubmit={handleSubmitComment}>
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
          <ul className="comments__ul">
            {comments.map((comment) => (
              <li key={comment.id} className="comment__list-item">
                <Comment
                  name={comment.name}
                  comment={comment.comment}
                  timestamp={comment.timestamp}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Comments;
