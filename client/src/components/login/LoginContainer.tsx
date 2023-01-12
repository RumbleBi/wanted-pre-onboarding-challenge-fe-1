import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { login } from "../../api/authApi";
import { IUserSignupInput } from "./LoginTypes";
import { GlobalContext } from "../../App";

export default function LoginContainer() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (accessToken) {
      navigate("/todos");
    }
  }, [navigate, accessToken]);

  const [userLoginInput, setUserLoginInput] = useState<IUserSignupInput>({
    email: "",
    password: "",
  });

  const onChangeLoginUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLoginInput({ ...userLoginInput, [e.target.name]: e.target.value });
  };

  const onClickLogin = () => {
    const { email, password } = userLoginInput;
    login({ email, password }).then((res) => {
      if (res.status === 400) {
        alert("로그인에 실패했습니다. 이메일과 패스워드를 확인해 주세요.");
      }
      if (res.status >= 200 && res.status <= 399) {
        alert("로그인에 성공하였습니다!");
        localStorage.setItem("accessToken", res.data.token);
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
