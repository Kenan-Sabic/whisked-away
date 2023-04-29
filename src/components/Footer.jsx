import React from 'react'

const Footer = () => {
  return (
    <div className='bg-jet min-h-24 w-screen border-t-4 border-white flex flex-col  md:flex-row'>
    <div className='border-2 border-white w-full md:w-1/3 flex flex-col'>
       <h1 className='text-white w-full hover:bg-sandybrown hover:text-black'>Menu</h1>
       <a href="#" className='text-white underline underline-offset-2 hover:bg-white hover:text-jet'>1</a>
       <a href="#" className='text-white underline underline-offset-2  hover:bg-white hover:text-jet'>2</a>
       <a href="#" className='text-white underline underline-offset-2  hover:bg-white hover:text-jet'>3</a>


    </div>
    <div className='border-2 border-white w-full md:w-1/3 flex flex-col'>
       <h1 className='text-white w-full hover:bg-sandybrown'>Something</h1>
       <a href="#" className='text-white underline underline-offset-2 '>1</a>
       <a href="#" className='text-white underline underline-offset-2'>2</a>
       <a href="#" className='text-white underline underline-offset-2'>3</a>
       <a href="#" className='text-white underline underline-offset-2'>4</a>
       <a href="#" className='text-white underline underline-offset-2'>5</a>


       </div>   
    <div className='border-2 border-white w-full md:w-1/3 flex flex-col'>
       <h1 className='text-white w-full hover:bg-sandybrown'>Contact</h1>
       <a href="#" className='text-white underline underline-offset-2'>1</a>
       <a href="#" className='text-white underline underline-offset-2'>2</a>
       <a href="#" className='text-white underline underline-offset-2'>3</a>


  
   </div>
 
   </div>
  )
}

export default Footer