import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ITodosData } from "../Todos.types";

export interface ITodosWritePresenterProps {
  handleTodoInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTodoSubmit: () => void;
  todoInput: ITodoInput;
}

export interface ITodosWriteContainerProps {
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
}

export interface ITodoInput {
  title?: string;
  content?: string;
}
