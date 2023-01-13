import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ITodosData } from "../todos/Todos.types";

export interface IModalPresenterProps {
  todoData: ITodoData;
  handleTodoUpdateInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTodoUpdateSubmit: () => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
}

export interface IModalContainerProps {
  setTodoData: Dispatch<SetStateAction<{ title: string; content: string }>>;
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  todoData: ITodoData;
  id: string;
}

interface ITodoData {
  title: string;
  content: string;
}
