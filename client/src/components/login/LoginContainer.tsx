import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {
  const navigate = useNavigate();
  const onClickSignupPage = () => {
    navigate("/signup");
  };

  return <LoginPresenter onClickSignupPage={onClickSignupPage} />;
}
