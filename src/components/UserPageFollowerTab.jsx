import React from 'react'
import FollowerBox from './FollowerBox'
import LoadMoreButton from './LoadMoreButton'
const UserPageFollowerTab = () => {
  return (
  <div>
    <div className='grid grid-cols-1 w-auto md:grid-cols-2 md:gap-x-4 ml-4 mr-4 shadow-lg rounded-md bg-platinum'>
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