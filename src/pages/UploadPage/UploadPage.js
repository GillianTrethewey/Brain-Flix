import "./UploadPage.scss";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import uploadImage from "../../assets/images/upload/Upload-video-preview.jpg";
import { useState } from "react";
import axios from "axios";
let baseURL = process.env.REACT_APP_API_URL;
let postURL = baseURL + "/videos";

export const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.title && formData.description) {
      try {
        await axios.post(postURL, formData);
        alert("Thank you for uploading your video!");
        navigate("/");
      } catch (error) {
        console.log("Failed to upload video:", error);
      }
    } else {
      alert("Please enter both a title and a description of your video");
    }
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
                onChange={handleInputChange}
                value={formData.title}></textarea>

              <label className="upload__label" htmlFor="video-description">
                add a video description
              </label>
              <textarea
                className="upload__textarea-description"
                name="description"
                id="video-description"
                placeholder="Add a description for your video"
                onChange={handleInputChange}
                value={formData.description}></textarea>
            </div>
          </div>

          <div className="upload__bottom">
            <Button
              btnType="submit"
              btnClassName="button--publish"
              btnLabel="publish"
            />
            <Link to="/">
              <button className="upload__cancel">cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};
