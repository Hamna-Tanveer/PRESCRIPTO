import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
function App() {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div>
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
