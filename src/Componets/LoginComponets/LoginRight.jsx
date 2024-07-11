import React from "react";
import LogIn from "../../assets/LoginAssets/LogIn.gif";

const LoginRight = () => {
  return (
    <>
      <div className="h-screen w-[60%] ">
        <picture>
          <img
            className="h-screen w-full object-cover"
            src={LogIn}
            alt={LogIn}
          />
        </picture>
      </div>
    </>
  );
};

export default LoginRight;
