import { Dispatch, SetStateAction } from "react";

export interface ITodosPresenterProps {
  onClickLogout: () => void;

  todosData: TodosData[];
  setTodosData: Dispatch<SetStateAction<ITodosData[]>>;
}

interface TodosData {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export interface ITodosData {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}
