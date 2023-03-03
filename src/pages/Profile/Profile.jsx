import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    navigate("/");
  };
  // if user is signed in, shows detailed info, if not, redirects to login page
  return user.id ? (
    <div className="profile">
      <div className="profile__email">Email : {user.email}</div>
      <div className="profile__id">Id : {user.id}</div>
      <button className="profile__button" onClick={handleClick}>
        Logout
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
