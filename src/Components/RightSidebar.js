import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';


const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
        <div className='p-2 flex items-center rounded-full bg-gray-100 outline-none '>
          <CiSearch size="20px" />
          <input type='text' className=' bg-transparent outline-none px-2' placeholder='Search' />
        </div>
        <div className='p-4 bg-gray-100 rounded-2xl my-4'>
          <h1 className='font-bold text-lg '>Who to follow</h1>
          <div className='flex justify-between gap-2 items-center'>
              <div className='flex gap-2'>
                <div>
                  <Avatar src='https://as2.ftcdn.net/v2/jpg/02/17/34/91/1000_F_217349116_kLWs5z4Vi6F1Cn6TUSFM8H90Ndd4IQ0t.jpg' size="40" round={true} />
                </div> 
                <div>
                    <h1 className='font-bold'>Chauhan</h1>
                    <p className='text-sm'>@chauhanmernstack</p>
                </div>
              </div>
              <div>
                <button className='px-3 py-1 bg-black rounded-full text-white'>Profile</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default RightSidebar