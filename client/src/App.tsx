import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/Login.container";
import SignupContainer from "./components/signup/Signup.container";
import TodosContainer from "./components/todos/Todos.container";

interface IGlobalContext {
  accessToken?: string | null;
  setAccessToken?: Dispatch<SetStateAction<string | null>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function App() {
  const queryClient = new QueryClient();

  const [accessToken, setAccessToken] = useState<string | null>("");
  const value = {
    accessToken,
    setAccessToken,
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
