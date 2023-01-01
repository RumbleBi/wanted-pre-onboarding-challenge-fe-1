import { Dispatch, SetStateAction } from "react";

export interface ITodosPresenterProps {
  onClickLogout: () => void;
  todosData: [];
  setTodosData: Dispatch<SetStateAction<any>>;
}
export interface ITodos {}
