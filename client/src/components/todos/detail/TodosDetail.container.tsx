import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodoById, getTodos } from "../../../api/todosApi";
import { GlobalContext } from "../../../App";
import { withAuth } from "../../../auth/auth";
import TodosDetailPresetner from "./TodosDetail.presenter";
import { ITodosDetailContainerProps } from "./TodosDetail.types";

function TodosDetailContainer(props: ITodosDetailContainerProps) {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoData, setTodoData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getTodoById({ id: props.id, accessToken }).then((res) => {
      setTodoData({ title: res?.data.data.title, content: res?.data.data.content });
    });
  }, [props.id, accessToken]);

  const onClickDeleteTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteTodo({ id: props.id, accessToken });
      alert("삭제되었습니다!");
      getTodos({ accessToken }).then((res) => {
        props.setTodosData([...res.data?.data]);
      });
      navigate("/todos");
    }
  };

  return (
    <TodosDetailPresetner
      id={props.id}
      setTodosData={props.setTodosData}
      onClickDeleteTodo={onClickDeleteTodo}
      setTodoData={setTodoData}
      todoData={todoData}
      isUpdate={isUpdate}
      setIsUpdate={setIsUpdate}
    />
  );
}

export default withAuth(TodosDetailContainer);
