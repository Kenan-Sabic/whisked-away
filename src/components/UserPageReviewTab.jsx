import React from 'react'
import UserPageReviewBox from './UserPageReviewBox'
import LoadMoreButton from './LoadMoreButton'
const UserPageReviewTab = () => {
  return (
    <div className='mr-4 ml-4 mt-4 rounded-lg shadow-lg'>
        <div>
          <UserPageReviewBox/>
          <UserPageReviewBox/>
          <UserPageReviewBox/>
          <UserPageReviewBox/>
        </div>
        <div>
          <LoadMoreButton/>
        </div>
    </div>
  )
}

export default UserPageReviewTab