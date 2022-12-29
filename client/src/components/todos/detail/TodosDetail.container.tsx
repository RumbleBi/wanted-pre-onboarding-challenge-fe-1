import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodoById, getTodos } from "../../../api/TodosApi";
import { withAuth } from "../../../auth/auth";
import TodosDetailPresetner from "./TodosDetail.presenter";

function TodosDetailContainer(props: any) {
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoData, setTodoData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getTodoById({ id: props.id, accessToken: localStorage.getItem("access_token") }).then((res) => {
      setTodoData({ title: res?.data.data.title, content: res?.data.data.content });
    });
  }, [props.id]);

  const onClickDeleteTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteTodo({ id: props.id, accessToken: localStorage.getItem("access_token") });
      alert("삭제되었습니다!");
      getTodos({ accessToken: localStorage.getItem("access_token") }).then((res) => {
        props.setTodosData([...res.data?.data]);
      });
      navigate("/todos");
    }
  };
  return (
    <TodosDetailPresetner
      id={props.id}
      onClickDeleteTodo={onClickDeleteTodo}
      setTodoData={setTodoData}
      todoData={todoData}
      isUpdate={isUpdate}
      setIsUpdate={setIsUpdate}
    />
  );
}

export default withAuth(TodosDetailContainer);
