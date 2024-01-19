import "./Comments.scss";
import avatarImg from "../../assets/images/avatar/Mohan-muruge.jpg";
import Button from "../Button/Button.js";

const Comments = () => {
  return (
    <section className="comments">
      <h4 className="comments__count">3 Comments</h4>
      <div className="comments__container">
        <form className="comment__form" action="" method="post">
          <div className="comment__group--form">
            <div className="comment__photo-container">
              <img
                className="comment__photo--form"
                src={avatarImg}
                alt="avatar"
              />
            </div>
            <div className="comment__form-details">
                <div className="comment__form-input-wrapper">
                  <label className="comment__label" htmlFor="comment">
                    JOIN THE CONVERSATION
                  </label>
                  <textarea
                    className="comment__textarea"
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="5"
                    placeholder="Add a new comment"></textarea>
                </div>
                <div className="comment__button-container">
                  <Button btnClassName="button--submit" btnType="submit" btnLabel="COMMENT"/>
                </div>
              </div>
          </div>
        </form>

        <section className="comments__list"></section>
      </div>
    </section>
  );
};

export default Comments;
