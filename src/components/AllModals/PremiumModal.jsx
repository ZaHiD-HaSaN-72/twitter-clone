import React, { useState } from 'react'

const PremiumModal = (closePremium, premium, stopHide) => {
    
   
    
  return (
    <>
       {premium && (
          <div onClick={closePremium} className='  fixed top-0 left-0 bottom-0 right-0 bg-[#0a090971] z-50'>
            <div onClick={stopHide} className=' rounded-xl fixed w-[37.4rem] left-1/2 translate-x-[-50%]  top-28 bg-white z-50 '>

              <div className='flex justify-between  p-1 pt-3' >
                <i className=' fa-solid fa-x px-3 py-2 rounded-full cursor-pointer hover:bg-slate-200' onClick={closePremium} />
              </div>

              <section className=' px-16 py-6'>
                <h1 className=' text-center text-3xl font-bold py-4 tracking-tight	'>Who are you?</h1>
                <h3 className=' text-center'>Choose the right subscription for you:</h3>
                <div className="flex gap-3 my-8 ">
                  <div className='hover:bg-slate-100 rounded-xl relative top-0 left-0 w-full h-full '>
                    <input type="text" className=' text-[0px] outline-blue-500 rounded-xl bg-transparent w-full h-full absolute cursor-pointer' />
                    <div className=' w-full h-full shadow-xl rounded-xl p-4 py-6'>
                      <h1>Premium</h1>
                      <h1 className=' font-bold'>I am an individual</h1>
                      <h1 className=' text-xs'>for individuals and creators</h1>

                    </div>
                  </div>
                  <div className=' hover:bg-slate-100 rounded-xl relative top-0 left-0 w-full h-full '>
                    <input type="text" className=' text-[0px] outline-blue-500 rounded-xl bg-transparent w-full h-full absolute cursor-pointer' />
                    <div className=' w-full rounded-xl shadow-xl p-4'>
                      <h1>Verified Organizations</h1>
                      <h1 className=' font-bold'>I am an organization</h1>
                      <h4 className=' text-xs'>for businesses, government</h4>
                      <h4 className=' text-xs'>agencies, and non-profits</h4>
                    </div>
                  </div>
                </div>
                
                <button className='block mx-auto w-full py-4 mt-2 bg-black text-white rounded-full font-bold'>Subscribe</button>
              <p className=' text-center py-8 tracking-tight'>Learn more about Premium and Verified Organizations</p>
              </section>

            </div>
          </div>
        )}
    </>
  )
}

export default PremiumModal
