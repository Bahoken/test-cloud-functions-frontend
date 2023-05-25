import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/LoginForm/RegistrationForm";
import AdminPage from "./Components/AdminPage/AdminPage";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
          
          <Route path="/register" element={<RegistrationForm />} />
          
          <Route path="/login" element={<LoginForm />} />
        
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
