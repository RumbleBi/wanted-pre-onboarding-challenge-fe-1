import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../../api/todosApi";
import { GlobalContext } from "../../App";
import { withAuth } from "../../auth/auth";
import TodosPresenter from "./Todos.presenter";
import { ITodosData } from "./Todos.types";

function TodosContainer() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalContext);

  const [todosData, setTodosData] = useState<ITodosData[]>([]);
  useEffect(() => {
    getTodos({ accessToken }).then((res) => {
      setTodosData([...res.data?.data]);
    });
  }, [accessToken]);

  const onClickLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다!");
      navigate("/");
    }
  };

  return (
    <TodosPresenter
      onClickLogout={onClickLogout}
      todosData={todosData}
      setTodosData={setTodosData}
    />
  );
}

export default withAuth(TodosContainer);
