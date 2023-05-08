import React from 'react'
import FollowerBox from './FollowerBox'
const UserPageFollowerTab = () => {
  return (
  <div>
    <div>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
        <FollowerBox/>
    </div>
    <div className='mt-5 justify-center items-center text-center'>
      <button class='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum mx-auto flex min-w-[200px] h-20 rounded-lg justify-center items-center text-center'>
          Load more entries
        </button>
    </div>
  </div>  
  )
}

export default UserPageFollowerTab