import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar({ modalPost, modalPremium}) {
  const [sideModal, setSideModal] = useState(false);
  const [moreModal, setMoreModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const showMoreModal = ()=>{
    setMoreModal(!moreModal)
  }

  const showSideModal = () => {
    setSideModal(!sideModal);
  };

  const postModal = () => {
    modalPost();
  };

  const onClose = () => {
    setSideModal(false);
    setMoreModal(false)
  };
 

  return (
    <>
      <div className=' p-1 sticky top-0 '>

        <div className=' pl-3'>
          <nav id='sideNav'>
          <Link to="/" className='fa-brands fa-x-twitter rounded-full hover:bg-slate-200 w-[3.2rem] text-3xl p-2'
          />

          <NavLink to="/home" className='flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-solid fa-house text-2xl'/> */}
            <svg viewBox='0 0 24 24' className=' h-7'> <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path></svg>
            <span className=' ml-4 text-xl'>Home</span>
          </NavLink>


          <NavLink to="/explore" className='flex p-3  rounded-full hover:bg-gray-200 '>
            {/* <i className='fa-solid fa-magnifying-glass text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            <span className='  ml-4 text-xl'>Explore</span>
          </NavLink>


          <NavLink to="/notification" className='flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-regular fa-bell text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></svg>
            <span className='  ml-4 text-xl'>Notification</span>
          </NavLink>

          <Link to="" className='flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-regular fa-envelope text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></svg>
            <span className=' ml-4 text-xl'>Messages</span>
          </Link>

          <NavLink to="/list" className='flex p-3  rounded-full hover:bg-gray-200 '>
            {/* <i className='fa-solid fa-table-list text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></svg>
            <span className='  ml-4 text-xl'>List</span>
          </NavLink>

          <Link to="" className='flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-regular fa-bookmark text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
            <span className='  ml-4 text-xl'>Bookmarks</span>
          </Link>

          {/* <a href="" className='fa-solid fa-users text-2xl' /> */}
          <Link to="" className='flex p-3  rounded-full hover:bg-gray-200'>
            <svg viewBox="0 0 24 24" aria-hidden="true" className=" h-6"><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></svg>
            <span className='  ml-4 text-xl'>Communities</span>
          </Link>

          <p onClick={modalPremium} className='flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-brands fa-x-twitter text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            <span className='  ml-4 text-xl'>Premium</span>
          </p>

          <Link to="/profile" className='flex p-3  rounded-full hover:bg-gray-200' >
            {/* <i className='fa-regular fa-user text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7"><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></svg>
            <span className='  ml-4 text-xl'>Profile</span>
          </Link>
          </nav>

          <p onClick={showMoreModal} to="" className=' cursor-pointer flex p-3  rounded-full hover:bg-gray-200'>
            {/* <i className='fa-regular fa-comment-dots text-2xl'/> */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className=" h-7"><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>
            <span className='  ml-4 text-xl'>More</span>
          </p>
          {moreModal && (
            <div ref={modalRef} className=' shadow-xl	 font-bold z-50 fixed bottom-44 bg-white w-[20rem] rounded-xl '>
              <div className='flex gap-4 p-3 font-bold text-2xl hover:bg-slate-100 rounded-t-lg'><svg viewBox="0 0 24 24" className=" h-6" ><path d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"></path></svg><h1>Monitization</h1></div>
              <hr />
              <p className=' cursor-pointer p-3 hover:bg-slate-100'>Creator studio</p>
              <p className=' cursor-pointer p-3 hover:bg-slate-100'>proffesional tools</p>
              <p className=' cursor-pointer p-3 hover:bg-slate-100 rounded-b-xl'>Setting and support</p>
            </div>
          )}

          <button className=' bg-blue-400 hover:bg-blue-500 px-24 py-3 mt-2 rounded-full text-white font-bold'
            onClick={postModal}
          >
            Post
          </button>
          {sideModal && (
            

            <div id='clipPath' ref={modalRef} className=' shadow-md	 font-bold z-50 fixed bottom-20 bg-white w-[18rem] rounded-xl py-3'>
              <p className=' cursor-pointer p-3 hover:bg-slate-100'>Add an existing account</p>
              <p className=' cursor-pointer p-3 hover:bg-slate-100'>Log out @ZahidHasan672</p>
             
            </div>
            
           
            
          )}
          <div onClick={showSideModal} className='  w-60 flex gap-3 hover:bg-gray-200 p-3 rounded-full mt-14 cursor-pointer'>
            <img className=' w-10 rounded-full' src="https://pbs.twimg.com/profile_images/1728410193032257536/iu0opRal_400x400.jpg" alt="" />
            <div className=' text-sm'><p className='font-bold'>Zahid</p><p>@ZahidHasan672</p></div>
            <i className='fa-solid fa-ellipsis mt-3 ml-5 ' />
            
          </div>
        </div>
      </div>
    </>
  )
};

export default Sidebar
