import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";







const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <img className='ml-4' width={"25px"} src= "https://img.freepik.com/premium-vector/twitter-new-x-logo-vector_768467-92.jpg?w=740" alt='' />
        </div>
        <div className='my-4'>
            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <FaHome />
                <h1 className='font-bold text-lg ml-2'>Home</h1>
            </div>

            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <CiHashtag />
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>

            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <IoIosNotificationsOutline />
                <h1 className='font-bold text-lg ml-2'>Notification</h1>
            </div>

            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <CiUser />
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </div>

            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <CiBookmark />
                <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <div className=' flex items-center my-2 hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer'>
                <IoMdLogOut />
                <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
            <button className='px-4 py-4 border-none bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
    </div>
  )
}

export default LeftSidebar