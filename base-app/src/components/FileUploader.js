import React from 'react'
import notification from '../assets/notification_sm.png'
import profile from "../assets/profile.png"
function FileUploader() {
  return (
    <div className='flex flex-col'>
        <div className='md:grid grid-cols-12 pt-8 hidden'>
            <div className='col-span-10 font-[Figtree] text-[24px] font-semibold'><h1>Upload CSV</h1></div>
            <div className='col-span-2 flex justify-end'>
                <span className='mx-3 self-center cursor-pointer'><img src={notification} alt="notification" /></span>
                <span className='mx-3 self-center cursor-pointer'><img src={profile} alt="profile" /></span>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default FileUploader