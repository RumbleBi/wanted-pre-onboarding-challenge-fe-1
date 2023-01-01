import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ITodosData } from "../Todos.types";

export interface ITodosWritePresenterProps {
  onChangeTodoInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateTodo: () => void;
  todoInput: ITodoInput;
}

export interface ITodosWriteContainerProps {
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
}

export interface ITodoInput {
  title?: string;
  content?: string;
}
