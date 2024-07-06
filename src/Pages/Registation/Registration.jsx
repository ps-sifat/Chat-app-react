import React from "react";
import RegistationLeft from "../../Componets/RegistationComponets/RegistationLeft.jsx";
import RegistationRight from "../../Componets/RegistationComponets/RegistationRight.jsx";

const Registration = () => {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <RegistationLeft />
        <RegistationRight />
      </div>
    </>
  );
};

export default Registration;
