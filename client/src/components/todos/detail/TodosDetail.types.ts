import { Dispatch, SetStateAction } from "react";

export interface ITodosDetailPresenterProps {
  todoData: ITodoData;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  onClickDeleteTodo: () => void;
  isUpdate: boolean;
  setTodoData: Dispatch<SetStateAction<{}>>;
  id: string;
}

export interface ITodoData {
  content?: string;
}
