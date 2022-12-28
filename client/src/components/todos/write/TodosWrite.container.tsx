import { useState } from "react";
import { createTodo } from "../../../api/TodosApi";
import TodosWritePresenter from "./TodosWrite.presenter";

export default function TodosWriteContainer() {
  const [todoInput, setTodoInput] = useState({
    title: "",
    content: "",
  });

  const onChangeTodoInput = (e: any) => {
    setTodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };
  const onClickCreateTodo = () => {
    const accessToken = localStorage.getItem("access_token");
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
      }
    });
  };
  return (
    <TodosWritePresenter
      onClickCreateTodo={onClickCreateTodo}
      onChangeTodoInput={onChangeTodoInput}
    />
  );
}
