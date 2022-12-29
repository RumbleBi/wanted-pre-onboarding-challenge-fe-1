import { useEffect, useState } from "react";
import { getTodos } from "../../../api/TodosApi";
import TodosListPresenter from "./TodosList.presenter";

export default function TodosListContainer() {
  const [todosData, setTodosData] = useState<any>([]);
  useEffect(() => {
    getTodos({ accessToken: localStorage.getItem("access_token") }).then((res) => {
      setTodosData([...res.data?.data]);
    });
  }, []);

  return <TodosListPresenter todosData={todosData} />;
}
