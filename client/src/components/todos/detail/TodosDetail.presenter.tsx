import ModalContainer from "../../modal/Modal.container";
import * as S from "./TodosDetail.styles";
import { ITodosDetailPresenterProps } from "./TodosDetail.types";

export default function TodosDetailPresetner(props: ITodosDetailPresenterProps) {
  return (
    <>
      <S.Container>
        <div>{props.todoData.content}</div>
        <div>
          <button onClick={() => props.setIsUpdate((prev) => !prev)}>수정</button>
          <button onClick={props.handleTodoDelete}>삭제</button>
        </div>
      </S.Container>
      {props.isUpdate && (
        <ModalContainer
          setIsUpdate={props.setIsUpdate}
          todoData={props.todoData}
          setTodoData={props.setTodoData}
          setTodosData={props.setTodosData}
          id={props.id}
        />
      )}
    </>
  );
}
