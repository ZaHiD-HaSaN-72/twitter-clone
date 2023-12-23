import React from 'react'
import NavRight from '../Navbar/NavRight'


function HomeRight({Hide, marginTop}) {
  return (
    <>
      <NavRight Hide={Hide} />
      <div className=' w-[21rem] sticky top-[-850px]'>
        <section style={Hide} className=' p-3 bg-slate-100 rounded-2xl mt-16'>
          <h1 className=' font-bold text-xl'>Subscribe to Premium</h1>
          <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button className=' px-4 py-1 mt-2 bg-black text-white rounded-full font-bold'>Subscribe</button>
        </section>
        <section style={marginTop} className='  bg-slate-100 rounded-2xl mt-5'>
          <h1 className=' font-bold text-xl p-3'>Trends for you</h1>
          {/* *** */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Video games · Trending</p>
              <p className='font-bold'>GTA 6</p>
              <p>67.7K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          {/*  */}
          <div className='flex justify-between items-center hover:bg-slate-200 p-3'>
            <div>
              <p>Trending in Bangladesh</p>
              <p className='font-bold'>#earthquake</p>
              <p>17.9K posts</p>
            </div>
            <i className='fa-solid fa-ellipsis rounded-full p-3 hover:bg-[#87cfeb3f] hover:text-sky-500'></i>
          </div>
          {/*  */}
          <p className=' p-3 text-sky-500 hover:bg-slate-200 rounded-b-2xl cursor-pointer'>Show more</p>
        </section>
        <section style={Hide} className='bg-slate-100 rounded-2xl mt-5'>
          <h1 className=' p-3 font-bold text-xl'>Who to follow</h1>

          {/* user */}
          <div className=' p-3 hover:bg-slate-200 flex justify-between items-center'>
            <div className='flex'>
              <img src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg" alt="" className='w-10 h-10 rounded-full mr-3' />
              <ul><li className='flex font-bold items-center'><p>Elon Musk</p><svg viewBox="0 0 24 24" className=' h-5 fill-sky-500 '><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></svg></li>
                <li><p>@elonmusk</p></li></ul>
            </div>
            <button className=' bg-black text-white rounded-full py-1 px-4'>Follow</button>
          </div>
          {/* user */}
          <div className=' p-3 hover:bg-slate-200 flex justify-between items-center'>
            <div className='flex'>
              <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg" alt="" className='w-10 h-10 rounded-full mr-3' />
              <ul><li className='flex font-bold items-center'><p>MrBeast</p><svg viewBox="0 0 24 24" className=' h-5 fill-sky-500 '><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></svg></li>
                <li><p>@MrBeast</p></li></ul>
            </div>
            <button className=' bg-black text-white rounded-full py-1 px-4'>Follow</button>
          </div>
          {/* user */}
          <div className=' p-3 hover:bg-slate-200 flex justify-between items-center'>
            <div className='flex'>
              <img src="https://pbs.twimg.com/profile_images/1638090920951250944/QEPY4cpL_400x400.jpg" alt="" className='w-10 h-10 rounded-full mr-3' />
              <ul><li className='flex font-bold items-center'><p>
                Real Madrid C.F.</p><svg viewBox="0 0 24 24" className=' h-5 fill-amber-400 '><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></svg></li>
                <li><p>@realmadrid
                </p></li></ul>
            </div>
            <button className=' bg-black text-white rounded-full py-1 px-4'>Follow</button>
          </div>
          <p className=' p-3 text-sky-500 hover:bg-slate-200 rounded-b-2xl cursor-pointer'>Show more</p>
        </section>
        <div className='flex flex-wrap gap-3 text-sm p-3 cursor-pointer'>
          <p className=' hover:underline'>Terms of service</p>
          <p className=' hover:underline'>Privacy policy</p>
          <p className=' hover:underline'>cookie Policy</p>
          <p className=' hover:underline'>Accessibility</p>
          <p className=' hover:underline'>Ads info</p>
          <p><span className=' hover:underline mr-2'>More</span><i className='fa-solid fa-ellipsis'></i></p>
          <p>© 2023 X Corp.</p>
        </div>
      </div>
    </>
  )
}

export default HomeRight
