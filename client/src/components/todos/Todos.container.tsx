import { useNavigate } from "react-router-dom";
import { withAuth } from "../../auth/auth";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const navigate = useNavigate();
  const onClickLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다!");
      navigate("/");
    }
  };
  return <TodosPresenter onClickLogout={onClickLogout} />;
}

export default withAuth(TodosContainer);
