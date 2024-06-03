'use client'
import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [ServerTime, setServerTime] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(()=>setServerTime(new Date()), 1000);

    return ()=>clearInterval(interval);
  }, [ServerTime])

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
    <div className='flex flex-col gap-2'>
        <h1 className='text-4xl items-end font-extrabold lg:text-7xl'>{TIME} </h1>
        <p className='text-lg font-medium text-sky-1 lg:text-2xl'> {DATE}</p>
    </div>
  )
}

export default Clock