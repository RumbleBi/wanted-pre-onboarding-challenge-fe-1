import SignupPresenter from "./SignupPresenter";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { signup } from "../../api/authApi";
import { signupValidation } from "../../libraries/utils";
import { IUserSignupInput } from "./SignupTypes";

export default function SignupContainer() {
  const navigate = useNavigate();

  const [validation, setValidation] = useState(false);
  const [userSignupInput, setUserSignupInput] = useState<IUserSignupInput>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const { email, password } = userSignupInput;
    if (signupValidation({ email, password })) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [userSignupInput]);

  const onChangeSignupUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignupInput({ ...userSignupInput, [e.target.name]: e.target.value });
  };

  const onClickSignup = () => {
    const { email, password } = userSignupInput;
    signup({ email, password }).then((res) => {
      if (res.status === 409) {
        alert("이미 존재하는 유저입니다.");
        return;
      }
      if (res.status >= 400 && res.status <= 499 && res.status !== 409) {
        alert("이메일 형식에 맞게 입력해주세요. 또는 패스워드의 길이는 8자리 이상이어야 합니다.");
        return;
      }
      if (res.status >= 200 && res.status <= 299) {
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
      validation={validation}
      onClickLoginPage={onClickLoginPage}
      onChangeSignupUserInput={onChangeSignupUserInput}
      onClickSignup={onClickSignup}
    />
  );
}
