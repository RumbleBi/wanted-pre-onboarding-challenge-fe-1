import SignupPresenter from "./Signup.presenter";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { signup } from "../../api/authApi";
import { signupValidation } from "../../libraries/utils";
import { ISignupInput } from "./Signup.types";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config";

export default function SignupContainer() {
  const navigate = useNavigate();

  const app = initializeApp(firebaseConfig);
  const [canSignin, setCanSignin] = useState(false);
  const [signupInput, setSignupInput] = useState<ISignupInput>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const { email, password } = signupInput;
    if (signupValidation({ email, password })) {
      setCanSignin(true);
    } else {
      setCanSignin(false);
    }
  }, [signupInput]);

  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = () => {
    const { email, password } = signupInput;
    signup({ email, password }).then((res) => {
      if (res.status === 409) {
        alert("이미 존재하는 유저입니다.");
        return;
      }
      if (res.status >= 400 && res.status <= 499 && res.status !== 409) {
        alert("이메일 형식에 맞게 입력해주세요. 또는 패스워드의 길이는 8자리 이상이어야 합니다.");
        return;
      }
      if (res.status >= 200 && res.status <= 399) {
        alert("회원가입을 축하합니다!");
        navigate("/");
      }
    });
  };
  const handleLoginPage = () => {
    navigate("/");
  };
  return (
    <SignupPresenter
      canSignin={canSignin}
      handleLoginPage={handleLoginPage}
      handleSignupChange={handleSignupChange}
      handleSignupSubmit={handleSignupSubmit}
    />
  );
}
