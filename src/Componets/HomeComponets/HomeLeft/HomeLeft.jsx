import React, { useState } from "react";
import navIcon from "../../../assets/HomeLeft/navIcon.png";
import homeIcon from "../../../assets/HomeLeft/home.gif";
import notification from "../../../assets/HomeLeft/notification.gif";
import setting from "../../../assets/HomeLeft/setting.gif";
import LogOut from "../../../assets/HomeLeft/LogOut.png";
import chat from "../../../assets/HomeLeft/chat.gif";

const HomeLeft = () => {
  const [test, settest] = useState("chat");
  return (
    <>
      <div className=" w-[220px] h-full py-10 bg-primery_Blue flex justify-between flex-col items-center rounded-[20px] ">
        <div className="icon">
          <picture>
            <img src={navIcon} alt={navIcon} />
          </picture>
        </div>
        <div className=" mt-[78px] flex flex-col justify-center items-center gap-y-20">
          {/* icon  */}
          <div
            className={`${
              test == "home" &&
              "bg-white flex justify-center items-center icon_box"
            }`}
          >
            <picture>
              <img
                className="mix-blend-multiply w-11 h-11"
                src={homeIcon}
                alt={homeIcon}
              />
            </picture>
          </div>
          <div
            className={`${
              test == "notification" &&
              "bg-white flex justify-center items-center icon_box"
            }`}
          >
            <picture>
              <img
                className="mix-blend-multiply w-11 h-11"
                src={notification}
                alt={notification}
              />
            </picture>
          </div>
          <div
            className={`${
              test == "chat" &&
              "bg-white flex justify-center items-center icon_box"
            }`}
          >
            <picture>
              <img
                className="mix-blend-multiply w-11 h-11"
                src={chat}
                alt={chat}
              />
            </picture>
          </div>
          <div
            className={`${
              test == "setting" &&
              "bg-white flex justify-center items-center icon_box"
            }`}
          >
            <picture>
              <img
                className="mix-blend-multiply w-11 h-11"
                src={setting}
                alt={setting}
              />
            </picture>
          </div>
        </div>
        <div className="mt-[187px]">
          <picture>
            <img
              className="mix-blend-multiply w-11 h-11"
              src={LogOut}
              alt={LogOut}
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default HomeLeft;
