import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='w-full'>
        <div className='bg-[#E0E0E0] h-[782px] flex items-center justify-center'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[40px] font-semibold'>Hi There!</h2>
                <p className='text-[40px]'>I am <span className='text-red-500 text-[50px] font-semibold'>Nathaniel Nelson</span></p>
                <button className='border border-red-500 text-red-500 w-3/5 rounded-lg p-1 font-semibold'>Product Designer/UX Designer</button>
                <article className='max-w-lg tracking-wider'>
                    <span className='text-red-500 font-bold'>High-energy creative designer with 2+
                    years experience in product design.</span> 
                    passionate about making seamless and 
                    easy to use product for customers of 
                    different technical abilities.
                    Good communicator and problem solver. 
                </article>
                <button className='bg-red-500 text-white p-2 rounded-lg w-1/3'>Connect with me.</button>
            </div>
            <div className={`w-[636px] h-[566px] imgbg flex items-start justify-center`}>
                <img src={require("../assets/img/nelsonvector2.png")} alt="" className='w-[420px] h-[522px]' />
            </div>
        </div>
        <div className='w-[80%] mx-auto flex flex-col space-y-10'>
            <h2 className='uppercase text-red-500 font-bold mt-10'>projects:</h2>
            <div className='flex mb-4 space-x-2 mx-auto'>
                <img src={require("../assets/img/project1.png")} alt="" className='h-[500px] w-3/5' />
                <div className='text-[#09A3F6] flex flex-col justify-end gap-4'>
                    <p className='text-3xl font-bold'>Blist</p>
                    <p className='text-sm'>Mobile design, Visual Design, Vacation App</p>
                    <p className='text-lg mb-16'>A case study on Vacation Bucketlist Application for explorers.</p>
                    <button className='bg-[#09A3F6] text-white p-2 rounded-lg w-1/3'>
                        <Link to='/projects/Blist'>View Details</Link>
                    </button>
                </div>
            </div>
            <div className='flex mb-4 space-x-6 mx-auto'>
                <img src={require("../assets/img/project2.png")} alt="" className='h-[500px] w-3/5' />
                <div className='text-[#5E60CE] flex flex-col justify-end gap-4'>
                    <p className='text-3xl font-bold'>World Citizen</p>
                    <p className='text-sm'>Mobile design, Visual Design, Vacation App</p>
                    <p className='text-lg mb-16'>A case study on Drezd platform for fashion goods.</p>
                    <button className='bg-[#5E60CE] text-white px-5 py-2 rounded-lg w-[40%]'>
                        <Link to='/projects/worldcitizen'>View Details</Link>
                    </button>
                </div>
            </div>
            <div className='flex mb-4 space-x-2 mx-auto'>
                <img src={require("../assets/img/project3.png")} alt="" className='h-[500px] w-3/5' />
                <div className='text-red-500 flex flex-col justify-end gap-4'>
                    <p className='text-3xl font-bold'>Blist</p>
                    <p className='text-sm'>Mobile design, Visual Design, Vacation App</p>
                    <p className='text-lg mb-16'>A case study on Vacation Bucketlist Application for explorers.</p>
                    <button className='bg-red-500 text-white p-2 rounded-lg w-1/3'>
                        <Link to='/projects/Bangs'>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home