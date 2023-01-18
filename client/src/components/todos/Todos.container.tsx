import { useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getTodos, getTodosTest } from "../../api/todosApi";
import { GlobalContext } from "../../App";
import { withAuth } from "../../auth/auth";
import TodosPresenter from "./Todos.presenter";
import { ITodosData } from "./Todos.types";
import axios from "axios";

function TodosContainer() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalContext);

  const queryClient = useQueryClient();

  // const query = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: getTodosTest({ accessToken }),
  // });
  // console.log(query);

  const [todosData, setTodosData] = useState<ITodosData[]>([]);
  useEffect(() => {
    getTodos({ accessToken }).then((res) => {
      setTodosData([...res.data?.data]);
    });
  }, [accessToken]);

  const handleLogoutPage = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다!");
      navigate("/");
    }
  };

  return (
    <TodosPresenter
      handleLogoutPage={handleLogoutPage}
      todosData={todosData}
      setTodosData={setTodosData}
    />
  );
}

export default withAuth(TodosContainer);
