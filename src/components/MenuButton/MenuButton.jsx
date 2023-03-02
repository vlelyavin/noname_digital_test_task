import "./MenuButton.scss";

export const MenuButton = ({ title, handleClick }) => {
  return (
    <button className="menu__button" onClick={handleClick}>
      {title}
    </button>
  );
};
