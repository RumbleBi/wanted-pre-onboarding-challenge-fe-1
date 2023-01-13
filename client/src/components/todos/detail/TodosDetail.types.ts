import { Dispatch, SetStateAction } from "react";
import { ITodosData } from "../Todos.types";

export interface ITodosDetailPresenterProps {
  todoData: ITodoData;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  handleTodoDelete: () => void;
  isUpdate: boolean;
  setTodoData: Dispatch<SetStateAction<ITodoData>>;
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
  id: string;
}

export interface ITodosDetailContainerProps {
  id: string;
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
}
export interface ITodoData {
  title: string;
  content: string;
}
