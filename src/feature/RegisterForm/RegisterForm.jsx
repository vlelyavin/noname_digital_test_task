import { Form } from "../../components/Form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../actions/actions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // creates a new account using passed data
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="Register" handleClick={handleRegister} />;
};
