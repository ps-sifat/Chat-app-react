import React from "react";
import signUp from "../../assets/RegistationAssets/signUp.png";

const RegistationRight = () => {
  return (
    <>
      <div className="h-screen w-[40%] ">
        <picture>
          <img
            className="h-screen w-full object-cover"
            src={signUp}
            alt={signUp}
          />
        </picture>
      </div>
    </>
  );
};

export default RegistationRight;
