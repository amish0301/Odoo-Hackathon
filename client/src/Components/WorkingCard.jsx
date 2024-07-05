import React from 'react'

const WorkingCard = ({ cnt, title, description, imgUrl }) => {
  return (
    <div className='flex flex-col justify-evenly bg-transparent gap-2 w-full md:max-w-sm border-b-2 border-black md:border-none select-none'>
      <div className='mb-3 text-3xl font-semibold p-3'>{cnt}</div>
      <div className='text-xl font-medium ml-3'>{title}</div>
      <div className='text-base md:text-lg text-balance p-3'>{description}</div>
      <div className='mb-3 w-24 h-24'><img src={imgUrl} alt="work-img" className='w-full h-full object-cover md:scale-110' /></div>
    </div>
  )
}

export default WorkingCard