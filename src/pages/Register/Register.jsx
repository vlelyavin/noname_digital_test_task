import { FormMessage } from "../../components/FormMessage";
import { RegisterForm } from "../../feature/RegisterForm";

export const Register = () => {
  return (
    <div>
      <RegisterForm />
      <FormMessage path="/login" linkText="Login" message="Already have an account?" />
    </div>
  );
};
