import React from 'react'
import ListNav from './ListNav/ListNav'
import HomeRight from '../../Home/Shared/HomeRight'
import ListLeft from './ListHome/ListLeft'

function ListMain() {

  const Hide = {
    display: "none",
  }
  const marginTop = {
    marginTop: "4rem"
  }

  return (
    <>
      <div className='flex'>
        <div className=' border-x w-[37.4rem]'>
          <ListNav />
          <ListLeft/>
        </div>

        <div className='w-[21rem] ml-7 relative'>
          <HomeRight Hide={Hide} marginTop={marginTop} />
        </div>
      </div>
    </>
  )
}

export default ListMain
