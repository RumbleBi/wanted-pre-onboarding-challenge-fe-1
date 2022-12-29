import * as S from "./TodosWrite.styles";

export default function TodosWritePresenter(props: any) {
  return (
    <>
      <S.Container>
        <div>
          <input
            name='title'
            type='text'
            placeholder='제목을 입력해주세요.'
            onChange={props.onChangeTodoInput}
            value={props.todoInput.title}
          />
          <input
            name='content'
            type='text'
            placeholder='할 일을 입력해주세요.'
            onChange={props.onChangeTodoInput}
            value={props.todoInput.content}
          />
        </div>
        <button onClick={props.onClickCreateTodo}>등록</button>
      </S.Container>
    </>
  );
}
