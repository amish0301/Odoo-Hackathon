import React from 'react'
import WorkingCard from './WorkingCard'

const Home2 = () => {
    return (
        <div className='min-h-screen bg-white p-8 w-full'>
            <div className='flex flex-col items-center justify-evenly gap-3'>
                <div className='text-md font-semibold'>HOW IT WORKS</div>
                <div className='h-1 w-[50px] bg-red-500' />

                <div className='text-md capitalize font-bold'>Working with us <span className='text-2xl text-green-700 font-semibold'>is easy</span></div>
            </div>
            <div className='grid grid-cols-3 grid-flow-row gap-5'>
                {/* process card render */}
                <WorkingCard cnt={"01"} description={'Take a Picture of a Garbage'} />
                <WorkingCard cnt={"02"} description={'Take a Picture of a Garbage'} />
                <WorkingCard cnt={"03"} description={'Take a Picture of a Garbage'} />
            </div>
        </div>
    )
}

export default Home2