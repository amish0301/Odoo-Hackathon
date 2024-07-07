import React from 'react'
import Home2 from './Home2'

const Home = () => {
  return (
    <>
      <div className="bg-secondary dark:bg-backgroundDark flex items-center">
        <div className="container mx-auto grid md:grid-cols-2 grid-flow-row gap-8 w-full md:p-8">
          {/* Left part with content */}
          <div className="pl-5 md:pl-10 my-auto">
            <h1 className="text-3xl md:text-5xl text-textLight dark:text-textDark font-bold leading-tight mb-4 text-balance md:pl-4">
              One Stop solution for Garbage<span className='text-red-500'>!</span>
            </h1>
            <p className="text-xl md:text-2xl text-textLight dark:text-textDark py-4 text-pretty md:pl-4">
              Efficiently manage and recycle waste with our comprehensive Garbage Management System.
              Simplify your waste disposal processes while contributing to a cleaner environment.
            </p>
            <button className="bg-white text-accentLight dark:text-accentDark font-semibold px-8 py-4 mt-2 mb-4 md:ml-4 rounded-full shadow-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>
          {/* Right part with image */}
          <div className="hidden md:block pl-14 m-auto">
            <img src="https://www.uffizio.com/wp-content/themes/uffizio/use-case/img/Waste.jpg" alt="Garbage Image" className="rounded-2xl" />
          </div>
        </div>
      </div>

      <Home2 />
    </>
  )
}

export default Home