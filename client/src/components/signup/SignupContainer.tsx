import SignupPresenter from "./SignupPresenter";
import { useNavigate } from "react-router-dom";

export default function SignupContainer() {
  const navigate = useNavigate();
  const onClickLoginPage = () => {
    navigate("/");
  };
  return <SignupPresenter onClickLoginPage={onClickLoginPage} />;
}
