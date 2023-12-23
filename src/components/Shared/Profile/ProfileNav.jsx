import React from 'react'

const ProfileNav = () => {
  return (
    <>

    <div className=' flex gap- items-center  fixed backdrop-blur-xl bg-[#ffffffa6]	 w-[37.3rem] '>
      <i className=' mr-6 ml-1 p-3 rounded-full hover:bg-slate-200' >
         <svg viewBox="0 0 24 24" className=' h-5'><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></svg>
      </i>
         <div className=' flex flex-col'>
         <h1 className=' font-bold text-xl'>Zahid</h1>
         <h6 className=' text-sm'>0 posts</h6>
         </div>
         
    </div>

  </>
  )
}

export default ProfileNav
