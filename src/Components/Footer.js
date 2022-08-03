import React from 'react';
import {AiOutlineTwitter, AiOutlineDribbble, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='h-32 mt-8 flex flex-col items-center justify-center'>
        <p className='text-red-500 font-bold text-[25px]'>Let’s work together</p>
        <div className='flex space-x-4 text-3xl'>
            <AiOutlineTwitter className='text-[#1DA1F2] '/>
            <AiOutlineDribbble className='text-[#C32361]'/>
            <AiFillLinkedin className='text-[#0A66C2]'/>
        </div>
    </div>
  )
}

export default Footer