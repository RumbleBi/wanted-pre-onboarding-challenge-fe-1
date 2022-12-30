import { useNavigate } from "react-router-dom";
import { getTodos, updateTodo } from "../../api/TodosApi";
import ModalPresenter from "./Modal.presenter";

export default function ModalContainer(props: any) {
  const navigate = useNavigate();
  const onChangeUpdateInput = (e: any) => {
    props.setTodoData({ ...props.todoData, [e.target.name]: e.target.value });
  };

  const onClickUpdateTodo = () => {
    const { title, content } = props.todoData;

    if (title === "" || content === "") {
      alert("제목 또는 내용을 반드시 입력해야 합니다");
      return;
    }
    updateTodo({
      id: props.id,
      title,
      content,
      accessToken: localStorage.getItem("access_token"),
    }).then(() => {
      alert("수정되었습니다!");
      getTodos({ accessToken: localStorage.getItem("access_token") }).then((res) =>
        props.setTodosData([...res?.data.data])
      );
      navigate("/todos");
    });
  };
  return (
    <ModalPresenter
      todoData={props.todoData}
      setIsUpdate={props.setIsUpdate}
      onChangeUpdateInput={onChangeUpdateInput}
      onClickUpdateTodo={onClickUpdateTodo}
    />
  );
}
