import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";
import TodosContainer from "./components/todos/Todos.container";

interface IGlobalContext {
  accessToken?: string | null;
  setAccessToken?: Dispatch<SetStateAction<string | null>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function App() {
  const [accessToken, setAccessToken] = useState<string | null>("");
  const value = {
    accessToken,
    setAccessToken,
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  return (
    <GlobalContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginContainer />} />
          <Route path='/signup' element={<SignupContainer />} />
          <Route path='/todos' element={<TodosContainer />} />
          <Route path='/todos/:id' element={<TodosContainer />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
