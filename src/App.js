import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/LoginForm/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
