import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userIcon from "../../assets/images/userIcon.png";
import bagIcon from "../../assets/images/bagIcon.png";
import "./Header.scss";

export const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <header className="header">
      <Link to="/" className="header__title">
        Sneakershop
      </Link>
      <div className="header__icons">
        <Link to={user.id ? "/profile" : "/login"} className="header__icon__link">
          <img src={userIcon} alt="user" className="header__icon" />
        </Link>
        <Link to="/cart" className="header__icon__link">
          <img src={bagIcon} alt="bag" className="header__icon" />
        </Link>
      </div>
    </header>
  );
};
