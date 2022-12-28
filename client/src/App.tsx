import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";
import TodosContainer from "./components/todos/Todos.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/signup' element={<SignupContainer />} />
        <Route path='/todos' element={<TodosContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
