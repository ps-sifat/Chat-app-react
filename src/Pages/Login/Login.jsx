import React from "react";
import LoginLeft from "../../Componets/LoginComponets/LoginLeft.jsx";
import LoginRight from "../../Componets/LoginComponets/LoginRight.jsx";

const Login = () => {
  return (
    <>
      <div className="flex justify-between items-center h-screen bg-white">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
};

export default Login;
