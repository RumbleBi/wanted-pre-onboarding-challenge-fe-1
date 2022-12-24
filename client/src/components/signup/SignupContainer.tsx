import SignupPresenter from "./SignupPresenter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../api/todosApi";

type userInput = { email?: string; password?: string };
export default function SignupContainer() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState<userInput>({
    email: "",
    password: "",
  });

  const onChangeUserInput = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onClickSignup = () => {
    const { email, password } = userInput;
    signup({ email, password });
  };
  const onClickLoginPage = () => {
    navigate("/");
  };
  return (
    <SignupPresenter
      onClickLoginPage={onClickLoginPage}
      onChangeUserInput={onChangeUserInput}
      onClickSignup={onClickSignup}
    />
  );
}
