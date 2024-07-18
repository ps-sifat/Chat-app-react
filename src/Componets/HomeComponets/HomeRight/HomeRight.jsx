import React from "react";
import Search from "../../CommonComponets/Search/Search.jsx";
import GroupList from "../HomeRightComponets/GoroupList/GroupList.jsx";
import Friends from "../HomeRightComponets/Friends/Friends.jsx";
const HomeRight = () => {
  return (
    <>
      <div>
        <Search />
        <div className="flex justify-start flex-wrap gap-8 mt-10">
          <GroupList />
          <Friends />
          <Friends />
          <GroupList />

          <Friends />
          <Friends />
        </div>
      </div>
    </>
  );
};

export default HomeRight;
