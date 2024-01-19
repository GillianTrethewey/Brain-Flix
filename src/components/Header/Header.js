import "./Header.scss";
import Button from "../Button/Button.js";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/images/avatar/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="Brain Flix logo" />
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
            <Button btnClassName="button--upload" btnLabel="UPLOAD" btnType="" />
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
