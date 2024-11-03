import React from "react";
import Search from "../../CommonComponets/Search/Search.jsx";
import GroupList from "./GoroupList/GroupList.jsx";
import Friends from "./Friends/Friends.jsx";
import UserList from "./UserList/UserList.jsx";
import FriendRequest from "./Friend Request/FriendRequest";
import MyGroup from "./MyGroup/MyGroup.jsx";
import BlockUser from "./BlockUser/BlockUser.jsx";

const HomeRightAllcontent = () => {
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

export default HomeRightAllcontent;
