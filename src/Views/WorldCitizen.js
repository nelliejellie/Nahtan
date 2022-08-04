import React from 'react'

const Projects = () => {
  return (
    <div className='mb-32'>
        <section>
          <img src={require("../assets/img/Frameproject1.png")} alt="" />
        </section>
        <section className='text-[#5E60CE] h-[456px] w-[86%] mx-auto flex flex-col justify-center space-y-8 mt-8'>
          <p className='font-bold text-2xl'>World Citizen</p>
          <p className='font-bold text-xl'>Overview</p>
          <div className='flex justify-between'>
            <article className='flex flex-col flex-2 max-w-[60%]'>
              <span className='text-[#5E60CE]'>
                This application is designed by a donation organization
                to help people donate at ease. Overtime, the organization
                doesn’t have a platform for users who would love to donate
                but doesn’t know where and how to go about it.
              </span>

              <span className='text-[#5E60CE]'>
                This platform would help it users know the nearest location
                for donation and also help it users request for donation to
                be picked up.
              </span> 
            </article>
            <div className='bg-[#9b9bda] flex flex-col justify-around pl-4 flex-2 w-[30%]'>
              <p className='text-white'>Role</p>
              <p className='text-white'>UI/UX Designer, Ux Researcher</p>
            </div>
          </div>
        </section>
        <section className='text-[#5E60CE] h-[456px] w-full bg-[#F0F0FF] flex justify-center mt-8'>
          <div className='w-[86%] flex flex-col space-y-8 mt-8'>
            <p className='font-bold text-2xl'>Problem Statement</p>
            <article className='text-[#5E60CE] max-w-[50%]'>
              World Citizen is an organization that helps collect 
              clothes donations and send to places they are needed. 
              For sometime now, donors are having difficulty finding 
              a branch to donate around them, which makes the oraganization 
              want to make an application to help with that. The problems 
              therefore are:
            </article>
            <ul className='list-disc ml-4'>
              <li>Donors are finding it hard to locate the organization office.</li>
              <li>Some donors don’t have the time becasue of busy schedules.</li>
              <li>Some donors sometimes forget that they want to pack up some clothes for donations.</li>
              <li>Donors don’t want to donate clothes alone.</li>
            </ul>
          </div>
        </section>
        <section className='text-[#5E60CE] h-[456px] w-full flex justify-center pt-4'>
          <div className='w-[86%] flex flex-col space-y-8 mt-8'>
            <p className='font-bold text-2xl'>Solution</p>
            <article className='text-[#5E60CE] max-w-[50%]'>
              From the problem statement , some solutions are put in place
              to tackle the problem. Made as an andriod application, 
              below are solutions to some of the problems:
            </article>
            <ul className='list-disc ml-4'>
              <li>Set-up GPS geo-location tags to help user find donation points around them.</li>
              <li>Because some users don’t have time, we included an on-demand pick-up driver.</li>
              <li>We included a reminder feature to help donors that tend to forget about donations due to one reason or another.</li>
              <li>We also included other means of donations for users who doesn’t want to donate clothes alone.</li>
            </ul>
          </div>
        </section>
        <section className='text-[#5E60CE] bg-[#F0F0FF] h-[456px] w-full flex justify-center mt-8'>
        <div className='w-[86%] flex flex-col space-y-8 mt-8'>
            <p className='font-bold text-2xl'>Design Process</p>
            
          </div>
        </section>
        <section className='text-[#5E60CE] h-[456px] w-full flex justify-center mb-8'>
          <div className='w-[86%] flex flex-col space-y-8 mt-8'>
              <p className='font-bold text-2xl'>Design</p>
              <article className='text-[#5E60CE]'>
                From the problem statement , some solutions are put in place
                to tackle the problem. Made as an andriod application, 
                below are solutions to some of the problems:
              </article>
              <div className='flex justify-around'>
                <img src={require("../assets/img/BACKGROUND.png")} alt="" />
                <img src={require("../assets/img/BACKGROUND (1).png")} alt="" />
                <img src={require("../assets/img/BACKGROUND (2).png")} alt="" />
                <img src={require("../assets/img/BACKGROUND (3).png")} alt="" />
              </div>
            </div>
        </section>
    </div>
  )
}

export default Projects