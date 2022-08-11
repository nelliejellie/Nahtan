import React from 'react'

const Blist = () => {
  return (
    <section className='flex flex-col space-y-8'>
        <div className='w-full h-[80vh] bg-[#6BA5FA] flex items-center justify-center'>
            <img src={require("../assets/img/Cover4.png")} alt="" className='h-[60vh]' />
        </div>

        <div className='flex flex-col space-y-8 w-[80%] mx-auto'>
            <p className='font-bold text-[#6BA5FA]'>World Citizen</p>
            <p className='font-bold text-[#6BA5FA]'>Overview</p>
            <div className='flex'>
                <article className='max-w-[60%]'>
                    Friends and family go out on vacations all the time, 
                    it is fun and all, until everyone comes back home and remember “Oh!!, 
                    I didn’t hit my bucket list”, “Oh!!, we forgot to go to the hill of palmaris” etc. 
                    Some made plans that got forgotten, while enjoying the fun of the vacation and if 
                    the vacation is a one time thing, those plans wouldn’t be kicked off the bucket list people had for the vacation. 
                    Blist is a vacation bucket list application which is aimed at helping users plan 
                    for activities to be done during a vacation and help achieve their plans based on where and when they want it done.    
                </article>
                <div className='bg-[#F0F6FF] flex flex-col justify-around pl-4 flex-2 w-[30%]'>
                    <p className='text-[#6BA5FA] font-bold'>Role</p>
                    <p className='text-black font-semibold'>UI/UX Designer, Ux Researcher</p>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <img src={require("../assets/img/Frame2377.png")} alt="" className='h-[80vh] w-full'/>
        </div>
        <div className='flex flex-col space-y-8'>
            <div className='flex flex-col space-y-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'> 
                    <article className='flex flex-col space-y-4 max-w-[60%]'>
                        <p className='text-[#6BA5FA] font-bold mb-8 text-2xl'>Problem Statement</p>
                        After making  research and talking to friends that travel regularly, I found the reasons for this problem to be:
                        <ol className='list-decimal ml-4'>
                            <li> Users find it hard to keep trackmwith activities while on vacation.</li>
                            <li>Nothing to remind the user of that particular activity exist in a location the user is in.</li>
                            <li>Users wants to be able to plan and designate duties amongst friends going on a vacation with them.</li>
                            <li>Users wants to be able to save for a particular vacation alone or with friends.</li>
                        </ol>
                    </article>
                    <img src={require("../assets/img/image7.png")} alt="" className='w-[20%] h-[20%]' />
                </div>
            </div>
            <div className='flex flex-col space-y-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <article className='flex flex-col space-y-4 max-w-[60%]'>
                        <p className='text-[#6BA5FA] font-bold mb-8 text-2xl'>Goals</p>
                        From the problem statement, I came up with a digital solution, 
                        making an application that helps it’s users make a vacation bucket 
                        list that can be shared with friends and families going on the same 
                        trip so all can know the locations and activities to be done on the vacation, 
                        and also help with saving up for the vacation if that is required. 
                        The application will  help with management of the bucket list, 
                        notification of items left to be kicked off, location reminder to help kick off 
                        the item, timeline, wallet and other fun features.
                    </article>
                    <img src={require("../assets/img/image3.png")} alt="" className='w-[20%] h-[20%]' />
                </div>
            </div>
            <div className='flex flex-col space-y-8 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <article className='flex flex-col space-y-4 max-w-[60%]'>
                        <p className='text-[#6BA5FA] font-bold mb-8 text-2xl'>App Features</p>
                        The features includes:
                        <ol className='list-decimal ml-4'>
                            <li>Bucket List: Users would be able to set up a bucket list for the vacation the user wants to go on and the period for the list to kick in or the location as well.</li>
                            <li>Share List: Users would be able to add other users to plan and share bucket list for a particular vacation they might be taking together.</li>
                            <li>Combo-safe feature: Group of friends that would love to go on a vacation together can all put funds for the vacation in one spot on the app, helping them save their money and making sure all is prepared for the vacation.</li>
                            <li>Kick-off: Users would be allowed to kick items off the bucket list once it has been done.</li>
                            <li>Notification: Users will get a notification if they are in a location of their bucket list to remind them of it or if the period of the vacation is about to elapse and items are still on the list.</li>
                            <li>Timeline feature: helps users keep track of the vacations they took in past years.</li>
                            <li>A Location based bucket list reminder notification: that reminds the user of an activity he/she wants to do at that location.
                            (users: partners, friends, family, organization)</li>
                        </ol> 
                    </article>
                    <img src={require("../assets/img/image14.png")} alt="" className='w-[20%] h-[20%]' />
                </div>
            </div>
        </div>
        <section className='flex flex-col space-y-8 w-[80%] mx-auto'>
            <p className='text-[#6BA5FA] font-bold text-2xl'>Some High-Fidelity Mockups 📱</p>
            <img src={require("../assets/img/Frame24081.png")} alt="" className='w-full'/>
            <img src={require("../assets/img/Frame24131.png")} alt="" className='w-full'/>
            <img src={require("../assets/img/Frame24141.png")} alt="" className='w-full'/>
            <p className='text-[#6BA5FA] text-sm'>Created my low fidelity and high fidelity mockups in Figma.</p>
            <p className='text-[#6BA5FA] text-sm'>Check out a detailed Case Study on NOTION</p>
            <div className='flex justify-between'>
                <button className='bg-[#09A3F6] p-2 rounded-lg text-white'>Home</button>
                <button className='bg-[#09A3F6] p-2 rounded-lg text-white'>View Other Projects</button>
            </div>
        </section>
    </section>
  )
}

export default Blist