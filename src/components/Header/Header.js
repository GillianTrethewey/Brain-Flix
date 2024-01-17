import "./Header.scss";
import Button from "../Button/Button.js";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/images/avatar/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Brain Flix logo" />
        <div className="header__wrapper">
          <input className="header__input" placeholder="Search" name="input" />
          <Button btnClassName="header__button--upload" btnLabel="UPLOAD" />
          <img className="header__avatar" src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
