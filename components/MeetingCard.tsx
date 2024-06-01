import { Calendar, CalendarCheck, CalendarDays, CalendarIcon, Copy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const MeetingCard = () => {
  return (
    <div className='flex flex-col bg-dark-1 gap-2 pt-6 p-5 w-full rounded-lg'>
      <div className='gap-2 flex-col flex'>
        <CalendarDays />
        <h1 className='font-extrabold'>Team Sync: Sprint Planning & Updates</h1>
        <p className=' text-sm font-light'>March 15, 2024 - 10:00 AM</p>
      </div>
      <div className='flex flex-col gap-2  xl:flex-row xl:justify-between'>
        <div className="flex mr-2">
          <Image className='border-2 filter hover:filter-none  hover:z-10 border-[#161925] h-15 w-10 rounded-full -mr-4' alt='avatar' src='/images/avatar-3.png' width={32} height={32} />
          <img className="border-2 hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={1} height={1} src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
          <img className="border-2 hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={16} height={16} src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
          <img className="border-2 hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={16} height={16} src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
          <span className="flex items-center justify-center -mr-4 hover:z-10 bg-dark-1 text-sm text-white text-gray-800 font-semibold border-2 border-[#161925] rounded-full h-15 w-10">+99</span>
        </div>
        <div className='gap-2 flex flex-col xl:flex-row'>
          <Button className='bg-blue-500'>
            Start
          </Button>
          <Button className='bg-dark-2 '>
            <Copy width={14}/>

            <p className='ml-1'>Copy Invitation</p>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default MeetingCard