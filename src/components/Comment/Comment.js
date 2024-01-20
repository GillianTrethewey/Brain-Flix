import "./Comment.scss";

const Comment = ({comment}) => {

  return (

    <div className="comment__card" key={comment.id}>
      <div className="comment__group">
        <div className="comment__photo-container">
          <div className="comment__photo"></div>
        </div>
        <div className="comment__container">
          <div className="comment__name-date-container">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{comment.timestamp}</p>
          </div>
          <p className="comment__text">
            {comment.comment}
          </p>
        </div>
      </div>
    </div>
   
  


    
  );
};

export default Comment;
