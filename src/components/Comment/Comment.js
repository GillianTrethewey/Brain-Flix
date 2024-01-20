import "./Comment.scss";

const Comment = ({ id, name, comment, timestamp }) => {
  return (
    <div className="comment__card" id={id}>
      <div className="comment__group">
        <div className="comment__photo-container">
          <div className="comment__photo"></div>
        </div>
        <div className="comment__container">
          <div className="comment__name-date-container">
            <p className="comment__name">{name}</p>
            <p className="comment__date">{timestamp}</p>
          </div>
          <p className="comment__text">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
