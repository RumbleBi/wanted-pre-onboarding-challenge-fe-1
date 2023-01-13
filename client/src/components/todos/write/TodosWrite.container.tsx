import { ChangeEvent, useContext, useState } from "react";
import { createTodo, getTodos } from "../../../api/todosApi";
import { GlobalContext } from "../../../App";
import TodosWritePresenter from "./TodosWrite.presenter";
import { ITodosWriteContainerProps } from "./TodosWrite.types";

export default function TodosWriteContainer(props: ITodosWriteContainerProps) {
  const { accessToken } = useContext(GlobalContext);
  const [todoInput, setTodoInput] = useState({
    title: "",
    content: "",
  });

  const handleTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };

  const handleTodoSubmit = () => {
    const { title, content } = todoInput;

    if (title === "" || content === "") {
      alert("제목, 내용은 반드시 입력해야 합니다.");
      return;
    }
    createTodo({ title, content, accessToken }).then((res) => {
      if (res.status === 400) {
        alert("다시 로그인해서 할 일을 적어주세요.");
        return;
      }
      if (res.status === 200) {
        alert("등록완료!");
        setTodoInput({ title: "", content: "" });
        getTodos({ accessToken }).then((res) => props.setTodosData([...res?.data.data]));
      }
    });
  };
  return (
    <TodosWritePresenter
      todoInput={todoInput}
      handleTodoSubmit={handleTodoSubmit}
      handleTodoInput={handleTodoInput}
    />
  );
}
