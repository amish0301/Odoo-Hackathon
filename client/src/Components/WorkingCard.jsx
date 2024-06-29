import React from 'react'

const WorkingCard = ({cnt, description}) => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm flex flex-col items-center'>
        <div className='text-3xl font-bold text-green-700 rounded-full bg-green-200 p-3'>{cnt}</div>
        <div className='text-wrap font-semibold'>{description}</div>
    </div>
  )
}

export default WorkingCard