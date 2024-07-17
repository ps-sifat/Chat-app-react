import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 h-[60px] w-[427px] rounded-[20px] shadow-xl shadow-[rgba(0, 0, 0, 0.35)]">
        <div className="flex items-center w-full ">
          <CiSearch className="text-xl" />
          <input
            className="w-full ml-9"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />
        </div>
        <BsThreeDotsVertical className="text-xl text-primery_Blue" />
      </div>
    </>
  );
};

export default Search;
