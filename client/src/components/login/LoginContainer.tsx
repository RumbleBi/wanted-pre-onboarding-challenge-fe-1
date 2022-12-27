import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api/AuthApi";

type userInput = { email?: string; password?: string };
export default function LoginContainer() {
  const navigate = useNavigate();
  const [userLoginInput, setUserLoginInput] = useState<userInput>({
    email: "",
    password: "",
  });

  const onChangeLoginUserInput = (e: any) => {
    setUserLoginInput({ ...userLoginInput, [e.target.name]: e.target.value });
  };

  const onClickLogin = () => {
    const { email, password } = userLoginInput;
    login({ email, password }).then((res: any) => {
      if (res === 400) {
        alert("로그인에 실패했습니다. 이메일과 패스워드를 확인해 주세요.");
      }
      if (res >= 200 && res <= 299) {
        alert("로그인에 성공하였습니다!");
        navigate("/todos");
      }
    });
  };
  const onClickSignupPage = () => {
    navigate("/signup");
  };

  return (
    <LoginPresenter
      onClickSignupPage={onClickSignupPage}
      onClickLogin={onClickLogin}
      onChangeLoginUserInput={onChangeLoginUserInput}
    />
  );
}
