import * as S from "./Modal.styles";
import { IModalPresenterProps } from "./Modal.types";

export default function ModalPresenter(props: IModalPresenterProps) {
  return (
    <>
      <S.Background></S.Background>
      <S.Container>
        <div>
          <div>제목</div>
          <input
            name='title'
            type='text'
            defaultValue={props.todoData.title}
            onChange={props.handleTodoUpdateInput}
          />
        </div>
        <div>
          <div>내용</div>
          <input
            name='content'
            type='text'
            defaultValue={props.todoData.content}
            onChange={props.handleTodoUpdateInput}
          />
        </div>
        <div>
          <button onClick={props.handleTodoUpdateSubmit}>수정</button>
          <button onClick={() => props.setIsUpdate((prev) => !prev)}>취소</button>
        </div>
      </S.Container>
    </>
  );
}
