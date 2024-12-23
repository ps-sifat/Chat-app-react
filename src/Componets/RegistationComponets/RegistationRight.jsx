import React from "react";
import registration from "../../assets/RegistationAssets/registration.gif";

const RegistationRight = () => {
  return (
    <>
      <div className="h-screen w-[60%] ">
        <picture>
          <img
            className="h-screen w-full object-cover"
            src={registration}
            alt={registration}
          />
        </picture>
      </div>
    </>
  );
};

export default RegistationRight;
