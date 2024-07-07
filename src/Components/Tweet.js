import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
  return (
    <div className='p-30 border-b border-r-gray-200'>
        <div>
            <div className='flex gap-3'>
                <Avatar src='https://as2.ftcdn.net/v2/jpg/02/17/34/91/1000_F_217349116_kLWs5z4Vi6F1Cn6TUSFM8H90Ndd4IQ0t.jpg' size="40" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Chauhan</h1>
                        <p className='text-gray-500 text-sm'>@chauhanmernStack . In</p>
                    </div>
                    <div>
                        <p>Hello Developer lets connect and grow together</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 hover:bg-green-200 rounded-full'>
                              <FaRegComment />
                            </div>  
                            <p>0</p>
                        </div>
                        <div className='flex items-center gap-2'> 
                            <div className='p-2 hover:bg-green-200 rounded-full'>
                              <CiHeart />
                            </div> 
                            <p>0</p>
                        </div>
                        <div className='flex items-center gap-2'> 
                            <div className='p-2 hover:bg-green-200 rounded-full'>
                              <CiBookmark/> 
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet