import React from 'react'

const Resume = () => {
  return (
    <div className='flex flex-col space-y-8 justify-center items-center'>
        <img src={require("../assets/img/nahtancv.png")} alt="" className='mt-4'/>
        <button className='bg-red-500 text-white p-2 rounded-lg w-1/5'>
            Download Cv
        </button>
    </div>
  )
}

export default Resume