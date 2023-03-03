import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/actions";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./Form.scss";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // authenticates user using google popup window
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async ({ user }) => {
        const data = {
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        };
        dispatch(setUser(data));
        await setDoc(doc(db, "users", user.uid), data);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
      <Button
        title="Continue with google"
        handleClick={handleGoogleSignIn}
        style={{ padding: "10px 20px", width: "100%" }}
      />
    </div>
  );
};
