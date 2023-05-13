import React from 'react'
import FollowerBox from './FollowerBox'
import LoadMoreButton from './LoadMoreButton'
const UserPageFollowerTab = () => {
  return (
  <div>
    <div className='ml-4 mr-4 shadow-lg rounded-md bg-platinum'>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
    </div>
    <LoadMoreButton/>
  </div>  
  )
}

export default UserPageFollowerTab