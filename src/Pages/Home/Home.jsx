import React from "react";
import HomeLeft from "../../Componets/HomeComponets/HomeLeft/HomeLeft";
import HomeRight from "../../Componets/HomeComponets/HomeRight/HomeRight";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center p-8">
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
};

export default Home;
