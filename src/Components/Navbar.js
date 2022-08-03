import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='font-bold h-[96px] w-full  pl-20 pr-20 flex justify-center items-center'>
        <div className='w-[86%] flex justify-between items-center'>
            <Link to="/" >Nathaniel Nelson</Link>
            <div className='flex space-x-4'>
                <Link to="/" className='text-red-500'>Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar