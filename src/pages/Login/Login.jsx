import { FormMessage } from "../../components/FormMessage";
import { LoginForm } from "../../feature/LoginForm";

export const Login = () => {
  return (
    <div>
      <LoginForm />
      <FormMessage path="/register" message="Or" linkText="Register" />
    </div>
  );
};
