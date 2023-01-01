import { Dispatch, SetStateAction } from "react";

export interface ITodosDetailPresenterProps {
  todoData: ITodoData;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  onClickDeleteTodo: () => void;
  isUpdate: boolean;
  setTodoData: Dispatch<SetStateAction<any>>;
  setTodosData: Dispatch<SetStateAction<any>>;
  id: string;
}

export interface ITodosDetailContainerProps {
  id: string;
  setTodosData: Dispatch<SetStateAction<any>>;
}
export interface ITodoData {
  content?: string;
}
