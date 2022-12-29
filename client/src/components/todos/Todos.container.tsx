import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../../api/TodosApi";
import { withAuth } from "../../auth/auth";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const navigate = useNavigate();

  const [todosData, setTodosData] = useState<any>([]);
  useEffect(() => {
    getTodos({ accessToken: localStorage.getItem("access_token") }).then((res) => {
      setTodosData([...res.data?.data]);
    });
  }, []);

  const onClickLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다!");
      navigate("/");
    }
  };
  return (
    <TodosPresenter
      onClickLogout={onClickLogout}
      todosData={todosData}
      setTodosData={setTodosData}
    />
  );
}

export default withAuth(TodosContainer);
