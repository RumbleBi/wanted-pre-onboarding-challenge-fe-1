import * as S from "./TodosList.styles";

export default function TodosListPresenter(props: any) {
  console.log(props.todosData);
  return (
    <S.Container>
      {props.todosData.map((el: any) => (
        <div>{el.title}</div>
      ))}
      <div></div>
    </S.Container>
  );
}
