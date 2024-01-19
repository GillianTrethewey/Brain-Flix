import "./Comment.scss";

const Comment = (props) => {
  return (

    <div className="comment__card">
      <div className="comment__group">
        <div className="comment__photo-container">
          <img className="comment__photo" />
        </div>
        <div className="comment__container">
          <div className="comment__name-date-container">
            <p className="comment__name">Michael Lions</p>
            <p className="comment__date">08/09/2021</p>
          </div>
          <p className="comment__text">
            They BLEW the ROOF off at their last event, once everyone started
            figuring out they were going. This is still simply the greatest
            opening of an event I have EVER witnessed.
          </p>
        </div>
      </div>
    </div>
  


    
  );
};

export default Comment;
