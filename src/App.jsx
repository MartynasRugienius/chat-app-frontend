import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Components/Auth/Login";
import { ForgotPass } from "./Components/Auth/ForgotPass";
import { Register } from "./Components/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetPass } from "./Components/Auth/ResetPass";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/forgotpass" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
