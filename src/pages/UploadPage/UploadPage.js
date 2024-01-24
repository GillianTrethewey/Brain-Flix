import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import uploadImage from "../../assets/images/upload/Upload-video-preview.jpg";
import { useState } from "react";

export const UploadPage = () => {
  const navigate = useNavigate();
  const handleClickToHome = () => navigate("/");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for uploading your video!");
    handleClickToHome();
  };

  return (
    <main className="upload">
      <form onSubmit={handleSubmit} className="upload__form">
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
                placeholder="Add a title to your video" 
                onChange={handleChangeTitle}
                value={title}
                ></textarea>

              <label className="upload__label" htmlFor="video-description">
                add a video description
              </label>
              <textarea
                className="upload__textarea-description"
                name="descripton"
                id="video-description"
                placeholder="Add a description for your video"
                onChange={handleChangeDesc}
                value={desc}
                ></textarea>
            </div>
          </div>

          <div className="upload__bottom">
            <Button
              btnType="submit"
              btnClassName="button--publish"
              btnLabel="publish"
              onClick={handleSubmit}
            />
            <button onClick={handleClickToHome} className="upload__cancel">
              cancel
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};
