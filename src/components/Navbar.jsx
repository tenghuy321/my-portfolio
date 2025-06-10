import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full'>
        <ul className='space-y-3 wrapper'>
            <li className='btn'>
                <NavLink to='/' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 01 Home</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/about' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 02 About me</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/services' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 03 My Services</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/skills' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 04 My Skills</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/facts' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 05 Facts</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/experience' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 06 Experience</NavLink>
            </li>
            <li className='btn'>
                <NavLink to='/projects' className={({isActive}) => `text-[16px] pl-6 w-full h-full block text-[#000] uppercase nav_link ${isActive ? 'bg-[#d9bb59] w-full font-[400] z-[999]' : ''}`}> 07 Project</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar