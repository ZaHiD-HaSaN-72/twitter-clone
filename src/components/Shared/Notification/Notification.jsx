import React from 'react'
import HomeRight from '../../Home/Shared/HomeRight'
import NotificationLeft from './NotificationLeft'

function Notification() {

    const Hide = {
        display: "none",
    }
    const marginTop = {
        marginTop: "4rem"
    }


    return (
        <>
            <div className=' flex'>
                <NotificationLeft />

                <div className='w-[21rem] ml-7 relative'>
                    <HomeRight Hide={Hide} marginTop={marginTop} />
                </div>
            </div>
        </>
    )
}

export default Notification
