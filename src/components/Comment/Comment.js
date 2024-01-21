import "./Comment.scss";
import convertTimestamp from "../../utils/utils.js";

const Comment = ({ id, name, comment, timestamp }) => {
  let commentDate = convertTimestamp(timestamp);

  return (
    <div className="comment__card" id={id}>
      <div className="comment__group">
        <div className="comment__photo-container">
          <div className="comment__photo"></div>
        </div>
        <div className="comment__container">
          <div className="comment__name-date-container">
            <p className="comment__name">{name}</p>
            <p className="comment__date">{commentDate}</p>
          </div>
          <p className="comment__text">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
