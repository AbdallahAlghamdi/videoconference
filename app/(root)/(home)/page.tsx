import Clock from '@/components/Clock';
import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react'
import { clearInterval, setInterval } from 'timers';

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div  className='h-[300px] md:p-5 lg:p-0  w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-end max-md:px-5 max-md:py-8 lg:p-11'>
          <Clock/>
        </div>
      </div>
      <MeetingTypeList />
      
    </section>
  )
}

export default Home;