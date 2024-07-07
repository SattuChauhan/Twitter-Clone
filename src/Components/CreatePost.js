import React from 'react'
import Avatar from 'react-avatar'
import { FaRegImages } from "react-icons/fa";


const CreatePost = () => {
  return (
    <div className='w-[100%] border-gray-500'>
        <div>
            <div className='flex items-center justify-evenly border-b border-gray-200'>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center p-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>For You</h1>
                </div>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center p-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                </div>
            </div>
            <div>
                <div className='flex items-center p-4'>
                    <div>
                        <Avatar src='https://as2.ftcdn.net/v2/jpg/02/17/34/91/1000_F_217349116_kLWs5z4Vi6F1Cn6TUSFM8H90Ndd4IQ0t.jpg' size="40" round={true} />
                    </div>
                    <input className='w-full ml-2 outline-none border-none text-lg' type='text' placeholder='What is happening?' />
                </div>
                <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                    <div>
                       <FaRegImages />
                    </div>
                    <button className='bg-[#109bF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost