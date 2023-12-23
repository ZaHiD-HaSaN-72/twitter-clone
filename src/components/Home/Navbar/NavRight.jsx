import React from 'react'

function NavRight({Hide}) {
  return (
    <>
    
      <div style={Hide} className=' fixed bg-white py-1 z-50'>
        <div className=' bg-[#eff3f4] rounded-full px-4 items-center w-[21rem]'>
          <i className="fa-solid fa-magnifying-glass mr-2"></i>
          <input type="text" placeholder='Search' className=' w-[90%] p-[0.65rem] outline-none bg-transparent' />
        </div>
      </div>
    
      
    </>
  )
}

export default NavRight

