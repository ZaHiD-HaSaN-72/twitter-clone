import React from 'react'
import { Link } from 'react-router-dom'

function ExploreNav() {
  return (
    <>
      <div className=' pl-4 flex gap-3  fixed backdrop-blur-xl bg-[#ffffffa6]	 w-[37.3rem] '>
      <div className='  bg-transparent py-1 z-50'>
        <div className=' bg-[#eff3f4] rounded-full px-4 items-center w-[32rem]'>
          <i className="fa-solid fa-magnifying-glass mr-2"></i>
          <input type="text" placeholder='Search' className=' w-[90%] p-[0.65rem] outline-none bg-transparent' />
        </div>
      </div>
        <Link to="" className='fa-solid fa-gear ml-1 p-4 rounded-full hover:bg-slate-200' title='Timeline setting'>

        </Link>
      </div>
      
    </>
  )
}

export default ExploreNav
