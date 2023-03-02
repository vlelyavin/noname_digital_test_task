import "./Button.scss";

export const Button = ({ title, style, handleClick }) => {
  return (
    <button className="button" style={style} onClick={handleClick}>
      {title}
    </button>
  );
};
