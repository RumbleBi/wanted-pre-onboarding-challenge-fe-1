import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/signup' element={<SignupContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
