import { Form } from "../../components/Form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/actions";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return <Form title="Login" handleClick={handleLogin} />;
};
