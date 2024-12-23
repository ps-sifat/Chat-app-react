import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import avater from "../../../../assets/HomeRight/profile.png";

const Friends = () => {
  return (
    <>
      <div>
        <div className="w-[400px] h-[400px] rounded-[20px] shadow-2xl p-5 bg-white ">
          {/* title  */}
          <div className="flex justify-between items-center">
            <span className="font-custom_popins font-semibold text-xl">
              Friends
            </span>
            <BsThreeDotsVertical className="text-xl text-primery_Blue" />
          </div>
          {/* title  */}
          <div className="mt-4 overflow-y-scroll  scrollbar-thumb-primery_Blue scrollbar-track-sky-200 scrollbar-thin h-[85%]  gap-y-4 flex flex-col pr-2">
            {[...new Array(10)].map((_, index) => (
              <div
                key={""}
                className="flex justify-between items-center pb-[10px] border-b-2 border-[#00000033] "
              >
                <div className="flex  ">
                  <div className="w-[54px] ">
                    <picture>
                      <img src={avater} alt={avater} />
                    </picture>
                  </div>
                  <div className="flex justify-center flex-col ml-[14px] ">
                    <h3 className="font-custom_popins font-semibold text-sm text-black">
                      Swathi
                    </h3>
                    <p className="font-custom_popins font-medium text-xs text-[#4D4D4D]">
                      Sure!
                    </p>
                  </div>
                </div>
                <div>
                  <span className="  text-[10px] text-black opacity-50 font-custom_popins font-medium ">
                    Today, 8:56pm
                  </span>
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
