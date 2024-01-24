import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import uploadImage from "../../assets/images/upload/Upload-video-preview.jpg";

export const UploadPage = () => {
  const navigate = useNavigate();

  const handleOnClickToHome = () => {
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Thank you for uploading your video!");
    handleOnClickToHome();
  };

  return (
    <div className="upload">
      <form onSubmit={submitHandler} className="upload__form">
        <div className="upload__container">
          <h1 className="upload__heading">Upload Video</h1>
          <div className="upload__image-form-wrapper">
            <div className="upload__wrapper">
              <div className="upload__thumbnail-info">
                <label htmlFor="file" className="upload__label">
                  video thumbnail
                </label>
                <img
                  className="upload__thumbnail"
                  alt="video thumbnail"
                  src={uploadImage}
                />
              </div>
            </div>
            <div className="upload__wrapper-form">
              <label className="upload__label" htmlFor="video-title">
                title your video
              </label>
              <textarea
                className="upload__textarea-title"
                name="title"
                id="video-title"
                placeholder="Add a title to your video"></textarea>

              <label className="upload__label" htmlFor="video-description">
                add a video description
              </label>
              <textarea
                className="upload__textarea-description"
                name="descripton"
                id="video-description"
                placeholder="Add a description for your video"></textarea>
            </div>
          </div>

          <div className="upload__bottom">
            <Button
              btnType="submit"
              btnClassName="button--publish"
              btnLabel="publish"
            />
            <button onClick={handleOnClickToHome} className="upload__cancel">
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
