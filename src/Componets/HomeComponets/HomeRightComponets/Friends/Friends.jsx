import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import avater from "../../../../assets/HomeRight/profile.png";

const Friends = () => {
  return (
    <>
      <div>
        <div className="w-[400px] h-[347px] rounded-[20px] shadow-2xl p-5 bg-white ">
          {/* title  */}
          <div className="flex justify-between items-center">
            <span className="font-custom_popins font-semibold text-xl">
              Friends
            </span>
            <BsThreeDotsVertical className="text-xl text-primery_Blue" />
          </div>
          {/* title  */}
          <div className="mt-4 overflow-y-scroll  scrollbar-thumb-primery_Blue scrollbar-track-sky-200 scrollbar-thin h-[85%]  gap-y-5 flex flex-col pr-2">
            {[...new Array(10)].map((_, index) => (
              <div
                key={""}
                className="flex justify-between items-center pb-[13px] border-b-2 border-[#00000033] "
              >
                <div className="flex  ">
                  <div className="w-[70px] ">
                    <picture>
                      <img src={avater} alt={avater} />
                    </picture>
                  </div>
                  <div className="flex justify-center flex-col ml-[14px] ">
                    <h3 className="font-custom_popins font-semibold text-lg text-black">
                      Friends Reunion
                    </h3>
                    <p className="font-custom_popins font-medium text-sm text-[#4D4D4D]">
                      Hi Guys, Wassup!
                    </p>
                  </div>
                </div>
                <div>
                  <button className="px-6 bg-primery_Blue text-xl font-custom_popins font-semibold text-white rounded-[5px] ">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
