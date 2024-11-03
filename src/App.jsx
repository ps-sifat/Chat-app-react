import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Registration from "./Pages/Registation/Registration.jsx";
import RootLayout from "./Componets/HomeComponets/RootLayout/RootLayout.jsx";
import Home from "./Pages/Home/Home.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route element={<RootLayout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/chat" element={"chat"}></Route>
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
