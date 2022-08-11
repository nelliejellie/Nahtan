import React from 'react'

const Bangs = () => {
  return (
    <section className='flex flex-col space-y-8'>
        <div>
            <img src={require("../assets/img/Headphones3.png")} alt="" className='w-full h-[80vh]' />
        </div>
        <div className='flex flex-col space-y-4'>
            <p className='text-red-500 ml-8 font-bold'>Variation 2</p>
            <img src={require("../assets/img/Headphones21.png")} alt="" className='w-full' />
        </div>
        <div className='flex flex-col space-y-4'>
            <p className='text-red-500 ml-8 font-bold'>Variation 2</p>
            <img src={require("../assets/img/Headphones31.png")} alt="" className='w-full'/>
        </div>
    </section>
  )
}

export default Bangs