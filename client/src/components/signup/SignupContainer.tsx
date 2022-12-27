import SignupPresenter from "./SignupPresenter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../api/AuthApi";

type userInput = { email?: string; password?: string };
export default function SignupContainer() {
  const navigate = useNavigate();

  const [userSignupInput, setUserSignupInput] = useState<userInput>({
    email: "",
    password: "",
  });

  const onChangeSignupUserInput = (e: any) => {
    setUserSignupInput({ ...userSignupInput, [e.target.name]: e.target.value });
  };

  const onClickSignup = () => {
    const { email, password } = userSignupInput;
    signup({ email, password }).then((res: any) => {
      if (res === 409) {
        alert("이미 존재하는 유저입니다.");
        return;
      }
      if (res === 400) {
        alert("이메일 형식에 맞게 입력해주세요. 또는 패스워드의 길이는 8자리 이상이어야 합니다.");
        return;
      }
      if (res >= 200 && res <= 299) {
        alert("회원가입을 축하합니다!");
        navigate("/");
      }
    });
  };
  const onClickLoginPage = () => {
    navigate("/");
  };
  return (
    <SignupPresenter
      onClickLoginPage={onClickLoginPage}
      onChangeSignupUserInput={onChangeSignupUserInput}
      onClickSignup={onClickSignup}
    />
  );
}
