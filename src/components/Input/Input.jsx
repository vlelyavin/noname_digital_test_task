import "./Input.scss";

export const Input = ({ type, placeholder, value, handleChange }) => {
  return <input className="input" type={type} placeholder={placeholder} value={value} onChange={handleChange} />;
};
