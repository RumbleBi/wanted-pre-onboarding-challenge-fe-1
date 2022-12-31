import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ITodosWritePresenterProps {
  onChangeTodoInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateTodo: () => void;
  todoInput: ITodoInput;
}

export interface ITodosWriteContainerProps {
  setTodosData: Dispatch<SetStateAction<[]>>;
}

export interface ITodoInput {
  title?: string;
  content?: string;
}
