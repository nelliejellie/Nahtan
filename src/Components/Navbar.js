import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {IoIosArrowDown} from 'react-icons/io'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [projects, setProjects] = useState(false)
  const handleProjects = () =>{
    setProjects(prev => !prev)
  }
  return (
    <nav className='bg-white font-bold h-[96px] w-full sticky top-0 pl-20 pr-20 flex justify-center items-center shadow-lg'>
        <div className='w-[86%] flex justify-between items-center'>
            <Link to="/" >Nathaniel Nelson</Link>
            <div className='flex space-x-4'>
                <Link to="/" onClick={()=>{setMenu('home')}} className={menu === 'home' ? "text-red-500" : ""}>Home</Link>
                <Link to="/resume" onClick={()=>{setMenu('resume')}} className={menu === 'resume' ? "text-red-500" : ""}>Resume</Link>
                <span  className={menu === 'projects' ? "text-red-500 flex items-center space-x-4" : "flex items-center space-x-4"}><span>Projects</span> <span onClick={handleProjects}><IoIosArrowDown /></span></span>
            </div>
            {
              projects &&
              <div className='absolute w-36 h-36 border-0 border-[#E0E0E0] left-[82%] top-14 flex flex-col justify-end shadow-xl'>
                <Link to="/projects/worldcitizen" className='border-b-2 border-red-500 m-1'>World Citizen</Link>
                <Link to="/projects/Blist" className='border-b-2 border-red-500 m-1'>Blist</Link>
                <Link to="/projects/Bangs" className=' m-1'>Bangs</Link>
            </div>
            }
        </div>
    </nav>
  )
}

export default Navbar