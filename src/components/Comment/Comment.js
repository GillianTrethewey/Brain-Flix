import "./Comment.scss";

const Comment = ({ id, name, comment, timestamp }) => {

  let newDate = new Date(timestamp);
  let month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  let date = newDate.getDate().toString().padStart(2, "0");
  let year = newDate.getFullYear().toString();
  let currDate = `${month}/${date}/${year}`;

  return (
    <div className="comment__card" id={id}>
      <div className="comment__group">
        <div className="comment__photo-container">
          <div className="comment__photo"></div>
        </div>
        <div className="comment__container">
          <div className="comment__name-date-container">
            <p className="comment__name">{name}</p>
            <p className="comment__date">{currDate}</p>
          </div>
          <p className="comment__text">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
