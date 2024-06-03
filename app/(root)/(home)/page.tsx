import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const ServerTime = new Date();
  const ClientOffset = ServerTime.getTimezoneOffset();
  const ClientTime = new Date( ServerTime.getTime() + ClientOffset )
  const TIME = ClientTime.toLocaleTimeString([], { timeStyle: 'short' });
  const DATE = `${new Date( ServerTime.getTime() + ClientOffset ).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
 
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div  className='h-[300px] md:p-5 lg:p-0  w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-end max-md:px-5 max-md:py-8 lg:p-11'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl items-end font-extrabold lg:text-7xl'>{TIME} </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'> {DATE}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
      
    </section>
  )
}

export default Home;