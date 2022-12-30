import * as S from "./Modal.styles";

export default function ModalPresenter(props: any) {
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
            onChange={props.onChangeUpdateInput}
          />
        </div>
        <div>
          <div>내용</div>
          <input
            name='content'
            type='text'
            defaultValue={props.todoData.content}
            onChange={props.onChangeUpdateInput}
          />
        </div>
        <div>
          <button onClick={props.onClickUpdateTodo}>수정</button>
          <button onClick={() => props.setIsUpdate((prev: boolean) => !prev)}>취소</button>
        </div>
      </S.Container>
    </>
  );
}
