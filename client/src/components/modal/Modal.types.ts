import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IModalPresenterProps {
  todoData: ITodoData;
  onChangeUpdateInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdateTodo: () => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
}

export interface IModalContainerProps {
  setTodoData: Dispatch<SetStateAction<{}>>;
  setTodosData: Dispatch<SetStateAction<{}>>;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  todoData: ITodoData;
  id: string;
}

interface ITodoData {
  title?: string;
  content?: string;
}