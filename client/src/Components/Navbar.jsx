import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMenuSharp as Menu, IoCloseSharp as Close } from "react-icons/io5";
import DropDownProfile from './DropDownProfile';
import ThemeToggle from './Theme/ThemeToggle';


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [updateNavbar, setUpdateNavbar] = useState(false);
  const user = true;

  const handleMobile = () => {
    setIsOpen(prev => !prev);
  }

  const handleDropdown = () => {
    setDropDownOpen(prev => !prev);
  }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdateNavbar(true);
    } else {
      setUpdateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={`bg-primary dark:bg-backgroundDark justify-between items-center px-4 md:px-24 py-2 flex ${updateNavbar ? 'sticky top-0 z-30 shadow-xl bg-transparent backdrop-blur' : ''}`}>
      <Link className='link-style items-center flex gap-2' to={'/'}>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="brand" className='w-12 object-cover' /> */}
        <span className='text-xl font-medium'>Odoo Hackathon</span>
      </Link>

      {/* nav-menu */}
      <div className='hidden md:flex items-center justify-between gap-8'>
        <Link className='link-style hover:text-gray-500' to="/">Home</Link>
        <Link className='link-style hover:text-gray-500' to="/about">About</Link>
        <Link className='link-style hover:text-gray-500' to="/contact">Contact</Link>
      </div>

      {/* login buttons & account */}
      {
        !user && (<button className='primary_btn hidden md:block mr-2' onClick={() => navigate('/sign-in')}>Sign In</button>)
      }

      {
        user && (
          <div className='hidden md:flex items-center justify-between'>
            <div className='mr-4'><ThemeToggle /></div>
            <div className='w-10 p-2 mr-4 rounded-full bg-green-300 border-solid cursor-pointer'>
              <img src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png" alt="" onClick={handleDropdown} />
              {dropDownOpen && <DropDownProfile />}
            </div>
          </div>
        )
      }

      <button className='md:hidden p-2' onClick={handleMobile}>
        <Menu className='text-2xl' />
      </button>

      {/* for mobile nav */}
      <div className={`fixed bg-white inset-0 p-2 ${isOpen ? "" : "hidden "}`}>
        <div className='flex justify-between'>
          <Link className='link-style items-center flex gap-2' to={'/'}>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="brand" className='w-12 object-cover' /> */}
            <span className='text-xl font-medium'>Odoo Hackathon</span>
          </Link>

          <button className='p-2 cursor-pointer md:hidden' onClick={handleMobile}>
            <Close className='text-2xl' />
          </button>
        </div>
        <div className='mt-6'>
          <Link className='link-style m-3 p-3 block rounded-md hover:bg-gray-500' to={'/'}>Home</Link>
          <Link className='link-style m-3 p-3 block rounded-md hover:bg-gray-500' to={'/about'}>About</Link>
          <Link className='link-style m-3 p-3 block rounded-md hover:bg-gray-500' to={'/contact'}>Contact</Link>
        </div>

        {
          !user && (<button className='px-7 mb-4 py-3 bg-red-500 w-fit ml-[20px] rounded-md text-white'>Sign In</button>)
        }
        {/* render account icon */}
        <div className='flex items-center gap-1'>
          <img src="#" alt="icon" />
          <span className='text-gray-500 font-normal text-lg'>Account</span>
        </div>

        <div className='h-[1px] bg-gray-300'></div>
      </div>

    </nav>
  )
}

export default Navbar