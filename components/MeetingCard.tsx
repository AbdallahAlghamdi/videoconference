import { Calendar, CalendarCheck, CalendarDays, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MeetingCard = () => {
  return (
    <div className='flex flex-col bg-dark-1 gap-2 pt-6 p-5 w-full rounded-lg'>
        <div className='gap-2 flex-col flex'>
        <CalendarDays/>
            <h1 className='font-extrabold'>Team Sync: Sprint Planning & Updates</h1>
            <p className=' text-sm font-light'>March 15, 2024 - 10:00 AM</p>
        </div>
        <div className="flex mr-2">
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={1} height={1} src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={16} height={16} src="https://randomuser.me/api/portraits/women/31.jpg" alt=""/>
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={16} height={16} src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={16} height={16} src="https://randomuser.me/api/portraits/women/32.jpg" alt=""/>
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={16} height={16} src="https://randomuser.me/api/portraits/men/44.jpg" alt=""/>
            <img className="border-2 border-white rounded-full h-8 w-8 -mr-6" width={16} height={16} src="https://randomuser.me/api/portraits/women/42.jpg" alt=""/>
            <span className="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full h-8 w-8">+999</span>
        </div>
    </div>
  )
}

export default MeetingCard