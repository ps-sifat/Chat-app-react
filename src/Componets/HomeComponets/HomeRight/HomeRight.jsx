import React from "react";
import Search from "../../CommonComponets/Search/Search.jsx";
import GroupList from "../HomeRightComponets/GoroupList/GroupList.jsx";
import Friends from "../HomeRightComponets/Friends/Friends.jsx";
import UserList from "../HomeRightComponets/UserList/UserList.jsx";
import FriendRequest from "../Friend Request/FriendRequest.jsx";
import MyGroup from "../MyGroup/MyGroup.jsx";
import BlockUser from "../BlockUser/BlockUser.jsx";
const HomeRight = () => {
  return (
    <>
      <div>
        <Search />
        <div className="flex justify-start flex-wrap gap-8 mt-9">
          <GroupList />
          <Friends />
          <UserList />
          <FriendRequest />
          <MyGroup />
          <BlockUser />
        </div>
      </div>
    </>
  );
};

export default HomeRight;
