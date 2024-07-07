import React from 'react'
import WorkingCard from './WorkingCard'
import imgClick from '../assets/click_picture.png'
import imgUpload from '../assets/upload.webp'
import garbageCollector from '../assets/garbage_collector.png'

const Home2 = () => {
    return (
        <div className='min-w-full bg-backgroundLight dark:bg-accentDark md:p-8 pt-5'>
            <h2 className='text-2xl md:text-4xl font-bold text-left inline-block min-w-full pl-5'>Basically, it <span className='w-fit text-2xl md:text-4xl font-bold text-left'><br />works like this</span></h2>
            <div className='md:mt-5 w-full grid md:grid-cols-3 grid-flow-row gap-4 md:gap-8 p-5'>
                <div className='relative'>
                    <WorkingCard cnt={"01"} title={"Click Picture"} description={'take a Photo of the garbgae and click on the camera icon to capture it. This step ensures that your garbage issue is documented visually'} imgUrl={imgClick} />
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gray-800 md:block hidden"></div>
                </div>
                <div className='relative'>
                    <WorkingCard cnt={"02"} title={"Upload Photo"} description={'Select the photo or upload it by clicking on the upload button, ensuring that the image is successfully uploaded'} imgUrl={imgUpload} />
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gray-800 md:block hidden"></div>
                </div>
                <div className='relative'>
                    <WorkingCard cnt={"03"} title={"Notify Workers"} description={'once the photo is uploaded, all the workers will be notified'} imgUrl={garbageCollector} />
                </div>
            </div>

        </div>
    )
}

export default Home2