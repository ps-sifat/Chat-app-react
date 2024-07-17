import React from "react";
import Registration from "./Pages/Registation/Registration.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        {/* <Route element={<RootLayout />}> */}
        {/* <Route index path="/" element={<Home />}></Route> */}
        {/* <Route path="/chat" element={"Caht"}></Route>
          <Route path="/notification" element={"Notification"}></Route>
          <Route path="/settings" element={"settings"}></Route>
          <Route path="*" element={<Error />}></Route> */}
        {/* </Route> */}
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
