import React from "react";
import FollowerBox from "./FollowerBox";
import LoadMoreButton from "./LoadMoreButton";
const UserPageFollowerTab = () => {
  return (
    <div>
      <div className="ml-4 mr-4 grid w-auto grid-cols-1 rounded-md md:grid-cols-2 md:gap-x-4">
        <FollowerBox />
        <FollowerBox />
        <FollowerBox />
        <FollowerBox />
        <FollowerBox />
      </div>
      <LoadMoreButton />
    </div>
  );
};

export default UserPageFollowerTab;
