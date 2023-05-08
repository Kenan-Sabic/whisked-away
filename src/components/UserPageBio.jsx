import React from 'react'

const UserPageBio = () => {
  return (
    <div>
        <div className='flex flex-col text-center items-center'>
          <h1 className='text-5xl'>User's Bio</h1>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-md'>
              <h1 className='ml-5 mt-6'>I report to God, you report to me. Jesus said, I will build this temple in three days. I could build a compiler in three days.</h1>
            </div>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-md'>
              <h1 className='mt-5 text-xl'>Joined</h1>
              <h1>XX.XX.20XX</h1>
            </div>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-lg'>
              <h1 className='mt-5 text-xl'>Favorite food:</h1>
              <h1>Pancakes</h1>
            </div>
          </div>
    </div>
  )
}

export default UserPageBio