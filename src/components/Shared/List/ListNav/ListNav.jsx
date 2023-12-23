import React from 'react'

function ListNav() {
  return (
    <>

      <div className=' flex gap- items-center  fixed backdrop-blur-xl bg-[#ffffffa6]	 w-[37.3rem] '>
        <i className=' mr-8 ml-1 p-3 rounded-full hover:bg-slate-200' >
           <svg viewBox="0 0 24 24" className=' h-5'><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></svg>
        </i>
        <div className='  bg-transparent py-1 z-50'>
          <div className=' bg-[#eff3f4] rounded-full px-4 items-center w-[26.5rem]'>
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
            <input type="text" placeholder='Search Lists' className=' w-[90%] p-[0.65rem] outline-none bg-transparent' />
          </div>
        </div>
        <i className=' ml-1 p-3 rounded-full hover:bg-slate-200' >
           <svg viewBox="0 0 24 24" className=' h-5'><path d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></svg>
        </i>
        <button className=' h-10 hover:bg-slate-200 px-3  rounded-full'><i className="fa-solid fa-ellipsis"></i></button>
      </div>

    </>
  )
}

export default ListNav
