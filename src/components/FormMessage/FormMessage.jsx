import { Link } from "react-router-dom";
import "./FormMessage.scss";

export const FormMessage = ({ message, path, linkText }) => {
  return (
    <div className="form__message">
      {message}
      <Link to={path}>{linkText}</Link>
    </div>
  );
};
