import React from 'react'
import Home2 from './Home2'

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-screen flex items-center p-8">
        <div className="container mx-auto flex justify-center items-center px-6 ">
          {/* Left part with content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl text-white font-bold leading-tight mb-4">
              One Stop solution for Garbage<span className='text-red-500'>!</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8">
              Efficiently manage and recycle waste with our comprehensive Garbage Management System.
              Simplify your waste disposal processes while contributing to a cleaner environment.
            </p>
            <button className="bg-white text-green-500 font-semibold py-2 px-8 rounded-full shadow-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>
          {/* Right part with image */}
          <div className="lg:w-1/2 hidden lg:block">
            <img src="https://www.uffizio.com/wp-content/themes/uffizio/use-case/img/Waste.jpg" alt="Garbage Image" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>

      <Home2 />
    </>
  )
}

export default Home