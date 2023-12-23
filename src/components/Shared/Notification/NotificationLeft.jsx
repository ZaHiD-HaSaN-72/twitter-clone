import React from 'react'
import { Link } from 'react-router-dom'

function NotificationLeft() {
    return (
        <>

            <div className='border-x w-[37.4rem] relative'>

                <section className=' z-50 sticky top-0 backdrop-blur-xl bg-[#ffffffa6]'>
                <div className=' justify-between flex  w-[37.3rem] '>
                    <h1 className=' p-4 font-medium text-2xl'>Notification</h1>
                    <i to="" className='fa-solid fa-gear ml-1 p-4 rounded-full hover:bg-slate-200' title='Timeline setting'>

                    </i>
                </div>
                <div className='flex border-b'>
                  <h1 className=' font-bold w-[90%] text-center py-4 hover:bg-slate-100'>All</h1>
                  <h1 className=' font-bold w-full text-center py-4 hover:bg-slate-100'>Verified</h1>
                  <h1 className=' font-bold w-full text-center py-4 hover:bg-slate-100'>Mention</h1>
                </div>
                </section>
                <div className=' w-full pt-6 px-3   sticky bottom-0'>
                    <h1 className='font-bold text-4xl px-24 py-3  tracking-tighter'>Nothing to see here — yet</h1>
                    <p className=' px-24'>From likes to reposts and a whole lot more, this is where all the action happens.</p>
                </div>

                

            </div>

        </>
    )
}

export default NotificationLeft
