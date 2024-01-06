import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
