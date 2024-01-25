import "./Header.scss";
import Button from "../Button/Button.js";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/images/avatar/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="Brain Flix logo"
          />
          </Link>
        </div>
        <div className="header__wrapper">
          <div className="header__search-container">
            <input
              className="header__search"
              id="site-search"
              placeholder="Search"
              name="query"
              type="search"
            />
            <img className="header__avatar" src={avatarImage} alt="avatar" />
          </div>
          <div className="header__button-container">
            <Link to="/upload">
            <Button
              btnClassName="button--upload"
              btnLabel="UPLOAD"
              btnType=""
            />
            </Link>
          </div>
          <img
            className="header__avatar--tablet"
            src={avatarImage}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
