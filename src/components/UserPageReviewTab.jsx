import React from "react";
import UserPageReviewBox from "./UserPageReviewBox";
import LoadMoreButton from "./LoadMoreButton";
const UserPageReviewTab = () => {
  return (
    <div className="ml-4 mr-4 mt-4 rounded-lg pb-5 shadow-lg">
      <div>
        <UserPageReviewBox />
        <UserPageReviewBox />
        <UserPageReviewBox />
        <UserPageReviewBox />
      </div>
      <div>
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default UserPageReviewTab;
