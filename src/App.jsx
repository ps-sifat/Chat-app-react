import React from "react";
import Registration from "./Pages/Registation/Registration.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Registration />
    </div>
  );
};

export default App;
