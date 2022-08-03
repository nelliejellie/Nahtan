import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <nav className='bg-white font-bold h-[96px] w-full sticky top-0 pl-20 pr-20 flex justify-center items-center shadow-lg'>
        <div className='w-[86%] flex justify-between items-center'>
            <Link to="/" >Nathaniel Nelson</Link>
            <div className='flex space-x-4'>
                <Link to="/" onClick={()=>{setMenu('home')}} className={menu == 'home' ? "text-red-500" : ""}>Home</Link>
                <Link to="/resume" onClick={()=>{setMenu('resume')}} className={menu == 'resume' ? "text-red-500" : ""}>Resume</Link>
                <Link to="/projects" onClick={()=>{setMenu('projects')}} className={menu == 'projects' ? "text-red-500" : ""}>Projects</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar