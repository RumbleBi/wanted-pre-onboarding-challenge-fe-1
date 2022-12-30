import ModalContainer from "../../modal/Modal.container";
import * as S from "./TodosDetail.styles";

export default function TodosDetailPresetner(props: any) {
  return (
    <>
      <S.Container>
        <div>{props.todoData.content}</div>
        <div>
          <button onClick={() => props.setIsUpdate((prev: boolean) => !prev)}>수정</button>
          <button onClick={props.onClickDeleteTodo}>삭제</button>
        </div>
      </S.Container>
      {props.isUpdate && (
        <ModalContainer
          setIsUpdate={props.setIsUpdate}
          todoData={props.todoData}
          setTodoData={props.setTodoData}
          todosData={props.todosData}
          setTodosData={props.setTodosData}
          id={props.id}
        />
      )}
    </>
  );
}
