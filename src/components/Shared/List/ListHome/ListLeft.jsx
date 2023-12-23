import React from 'react'


function ListLeft() {
  return (
    <>
       <div className='mt-14 border-b '>
            <h1 className='font-bold text-xl px-4 py-3'>
              Pinned Lists</h1>
            <p className=' p-8 tracking-tight	 '>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
          </div>

          <section className=' border-b  '>

            <h1 className='font-bold text-xl px-4 py-3'>Discover new Lists</h1>

            <div className=' p-4 hover:bg-slate-200 flex justify-between items-center'>
              <div className='flex'>
                <img src="https://pbs.twimg.com/list_banner_img/1696278027892899840/T5tbG20k?format=jpg&name=small" alt="" className=' w-12 h-12 rounded-xl mr-3' />
                <ul><li ><p className='font-bold'>Bangladesh-News <span className=' text-sm font-normal'>· 32 members</span></p></li>
                  <li><p className=' text-sm'>13.8K followers including @sisofik718 </p></li></ul>
              </div>
              <button className=' bg-black text-white rounded-full p-2'>

                <svg viewBox="0 0 24 24" className=' h-5 fill-white'><path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" class=""></path></svg>
              </button>
            </div>

            <div className=' p-4 hover:bg-slate-200 flex justify-between items-center'>
              <div className='flex'>
                <img src="https://pbs.twimg.com/list_banner_img/1561459105092767744/eGkbQUYH?format=jpg&name=small" alt="" className=' w-12 h-12 rounded-xl mr-3' />
                <ul><li ><p className='font-bold'>News (সংবাদ)
                  <span className=' text-sm font-normal'>· 26 members</span></p></li>
                  <li><p className=' text-sm'>
                    12.2K followers including @jannat_odhora </p></li></ul>
              </div>
              <button className=' bg-black text-white rounded-full p-2'>

                <svg viewBox="0 0 24 24" className=' h-5 fill-white'><path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" class=""></path></svg>
              </button>
            </div>

            <div className=' p-4 hover:bg-slate-200 flex justify-between items-center'>
              <div className='flex'>
                <img src="https://pbs.twimg.com/media/EXZ1_hkUYAA56JA?format=png&name=small" alt="" className=' w-12 h-12 rounded-xl mr-3' />
                <ul><li ><p className='font-bold'>Domestic News
                  <span className=' text-sm font-normal'>· 24 members</span></p></li>
                  <li><p className=' text-sm'>7K followers including @MdkhokanMiah12 </p></li></ul>
              </div>
              <button className=' bg-black text-white rounded-full p-2'>

                <svg viewBox="0 0 24 24" className=' h-5 fill-white'><path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" class=""></path></svg>
              </button>
            </div>

            <p className=' p-3 mb-1 text-sky-500 hover:bg-slate-200 cursor-pointer'>Show more</p>
          </section>
          <div className=''>

            <h1 className='font-bold text-xl  px-4 py-3'> Your Lists
            </h1>
            <p className=' p-8 tracking-tight	 '>You haven't created or followed any Lists. When you do, they'll show up here.</p>
          </div>
    
  </>
  )
}

export default ListLeft
