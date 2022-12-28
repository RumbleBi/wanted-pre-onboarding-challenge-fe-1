import TodosListContainer from "./list/TodosList.container";
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

        <TodosListContainer />
        <TodosWriteContainer />
      </S.Container>
    </S.Background>
  );
}
