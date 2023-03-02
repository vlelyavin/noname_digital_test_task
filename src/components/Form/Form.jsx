import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./Form.scss";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <div className="form__title">{title}</div>
      <Input type="text" placeholder="Email" value={email} handleChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <Button
        title={title}
        handleClick={() => handleClick(email, password)}
        style={{ padding: "10px 20px", width: "100%" }}
      />
    </div>
  );
};
