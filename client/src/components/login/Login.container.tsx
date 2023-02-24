import LoginPresenter from "./Login.presenter";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { login } from "../../api/authApi";
import { ILoginInput } from "./Login.types";
import { GlobalContext } from "../../App";
import { loginGoogle } from "../../firebase/firebase";

export default function LoginContainer() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (accessToken) {
      navigate("/todos");
    }
  }, [navigate, accessToken]);

  const [loginInput, setLoginInput] = useState<ILoginInput>({
    email: "",
    password: "",
  });

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  const handleLoginGoogleSubmit = () => {
    loginGoogle().then((res) => {
      console.log(res);
      const user = res.user;
      alert(`이메일: ${user.email} UID: ${user.uid}`);
    });
  };

  const handleLoginSubmit = () => {
    const { email, password } = loginInput;
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
  const handleSignupPage = () => {
    navigate("/signup");
  };

  return (
    <LoginPresenter
      handleSignupPage={handleSignupPage}
      handleLoginSubmit={handleLoginSubmit}
      handleLoginGoogleSubmit={handleLoginGoogleSubmit}
      handleLoginInput={handleLoginInput}
    />
  );
}
