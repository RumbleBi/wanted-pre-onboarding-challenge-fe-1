import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDate } from "../../libraries/utils";
import TodosDetailContainer from "./detail/TodosDetail.container";
import * as S from "./Todos.styles";
import { ITodosData, ITodosPresenterProps } from "./Todos.types";
import TodosWriteContainer from "./write/TodosWrite.container";

export default function TodosPresenter(props: ITodosPresenterProps) {
  const navigate = useNavigate();
  const url = useLocation().pathname;

  return (
    <S.Background>
      <S.Container>
        <S.TopWrapper>
          <h1>Todos</h1>
          <button onClick={props.handleLogoutPage}>로그아웃</button>
        </S.TopWrapper>
        <S.BodyWrapper>
          {props.todosData?.map((el: ITodosData) => (
            <Fragment key={el.id}>
              <S.TodoItem
                onClick={() => {
                  if (url !== `/todos/${el.id}`) {
                    navigate(`/todos/${el.id}`);
                  } else {
                    navigate(`/todos/`);
                  }
                }}
              >
                <div>
                  <span>제목: {el.title}</span>
                  <span>{getDate(el.updatedAt)}</span>
                </div>
              </S.TodoItem>
              {url === `/todos/${el.id}` && (
                <TodosDetailContainer id={el.id} setTodosData={props.setTodosData} />
              )}
            </Fragment>
          ))}
        </S.BodyWrapper>
        <TodosWriteContainer setTodosData={props.setTodosData} />
      </S.Container>
    </S.Background>
  );
}
