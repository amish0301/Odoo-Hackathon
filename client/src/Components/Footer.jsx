import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks, socialMedia } from '../constants/constant'

const Footer = () => {
  return (
    <footer className='max-w-full bg-black'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link to={"/"}>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="brand-logo" className='w-12' />
          </Link>
          <p className='mt-6 text-base leading-7 font-montserrat text-slate-300 sm:max-w-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta porro illo ex ipsa suscipit? Facere in quo ipsa perferendis laborum
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {
              socialMedia.map((item, index) => (
                <div className='flex justify-center items-center w-8 h-8 bg-white rounded-full'>
                  <Link to={item.href} target='_blank'><img src={item.src} alt={item.alt} key={index} width={20} height={20} /></Link>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {
              footerLinks.map((section,index) => (
                <div key={index}>
                  <h4 className='text-white font-montserrat text-lg md:text-xl leading-normal mb-6 font-medium'>{section.title}</h4>
                  <ul>
                    {
                      section.links.map((link,index) => (
                        <li key={index} className='text-slate-400 font-montserrat mt-3 text-base leading-normal hover:text-white'>
                          <Link to={link.href}>{link.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
          }
        </div>
      </div>
      <div className='flex justify-between text-slate-400 mt-4 max-sm:flex-col max-sm:items-center'>
          <p className='flex flex-1 justify-start font-montserrat items-center gap-2 cursor-pointer'>
            © Copyright 2024. All Rights Reserved.
          </p>
          <p className='mr-2'>Made with ❤️ by <Link to={'https://amishpithva.vercel.app/'} className='text-blue-400'>Amish Pithva</Link></p>
      </div>
    </footer>
  )
}

export default Footer