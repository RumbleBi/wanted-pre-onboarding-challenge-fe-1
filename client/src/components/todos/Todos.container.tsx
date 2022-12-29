import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodos } from "../../api/TodosApi";
import { withAuth } from "../../auth/auth";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const navigate = useNavigate();
  const id = useParams();

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

  const onClickTodoItem = (e: any) => {
    console.log(e.target.classname);
    // navigate(`/todos/${e.target.key}`);
  };
  return (
    <TodosPresenter
      onClickLogout={onClickLogout}
      todosData={todosData}
      setTodosData={setTodosData}
      onClickTodoItem={onClickTodoItem}
    />
  );
}

export default withAuth(TodosContainer);
