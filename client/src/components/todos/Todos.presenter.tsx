import { getDate } from "../../libraries/utils";
import * as S from "./Todos.styles";
import TodosWriteContainer from "./write/TodosWrite.container";

export default function TodosPresenter(props: any) {
  return (
    <S.Background>
      <S.Container>
        <S.TopWrapper>
          <h1>Todos</h1>
          <button onClick={props.onClickLogout}>로그아웃</button>
        </S.TopWrapper>
        <S.BodyWrapper>
          {props.todosData?.map((el: any) => (
            <S.TodoItem key={el.id} onClick={props.onClickTodoItem}>
              <div>
                <span>제목: {el.title}</span>
                <span>{getDate(el.createdAt)}</span>
              </div>
              <div>내용: {el.content}</div>
            </S.TodoItem>
          ))}
        </S.BodyWrapper>
        <TodosWriteContainer setTodosData={props.setTodosData} />
      </S.Container>
    </S.Background>
  );
}
