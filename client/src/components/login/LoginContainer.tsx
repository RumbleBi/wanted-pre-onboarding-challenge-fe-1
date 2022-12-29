import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../api/AuthApi";

type userInput = { email?: string; password?: string };
export default function LoginContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todos");
    }
  }, [navigate]);

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
      if (res.status === 400) {
        alert("로그인에 실패했습니다. 이메일과 패스워드를 확인해 주세요.");
      }
      if (res.status >= 200 && res.status <= 299) {
        alert("로그인에 성공하였습니다!");
        localStorage.setItem("access_token", res.data.token);
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
