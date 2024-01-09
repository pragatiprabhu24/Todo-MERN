import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
