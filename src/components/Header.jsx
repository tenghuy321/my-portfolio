import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed w-full px-4 md:px-10 h-[4rem] md:h-[5rem] flex justify-between items-center bg-[#d7ba5a] z-[9999]'>
      <a href='/' className=''>
        <svg className='w-[48px] h-[55px]' viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8356 17.7634C7.82768 26.4469 0.941754 38.5192 1.25475 45.4237C1.29946 45.7202 1.38889 46.0167 1.56775 46.1014C3.26687 46.9063 6.44155 40.7642 7.60411 39.0699C7.60411 39.0699 8.00653 38.0533 8.58781 38.5192C8.99024 38.8581 8.45367 39.1546 8.45367 39.1546C7.87239 39.79 3.75872 47.1181 1.83603 46.991C0.0474782 46.8639 0.00276439 45.4237 0.00276439 45.4237C-0.176091 36.9943 8.36424 22.7194 13.9088 13.4428C13.9088 13.4428 14.49 12.765 15.2502 13.0616C15.8314 13.3157 15.6079 14.0358 15.6079 14.0358C15.6079 14.0782 14.803 14.7983 12.8356 17.7634ZM47.2228 21.4486C47.9382 21.6604 46.9992 22.2111 46.6862 22.1263C43.1985 21.0674 35.7313 20.7709 27.7723 20.8132C25 26.7011 22.183 32.7584 19.9473 38.0109C20.0815 37.8415 20.2603 37.7144 20.4392 37.5873C23.6586 34.7916 24.7764 34.5375 25.4024 34.6646C25.7601 34.7069 26.0731 34.9611 26.2073 35.2999C26.6544 36.486 22.4513 41.5267 22.4066 41.8656C23.7927 41.9079 26.6544 39.8747 29.2478 38.2227C31.0364 37.079 32.1542 35.8083 32.3331 35.5117C32.3331 35.5117 32.8696 34.6646 33.2721 34.834C33.8533 35.1305 33.4956 35.9777 33.4956 35.9777C33.1826 36.7401 24.1952 42.7975 22.4066 43.094C22.3172 43.1363 22.2278 43.1363 22.183 43.1363C21.7806 43.1363 21.557 42.9669 21.4229 42.8398C20.7075 42.0774 25.1789 36.5284 25.0447 35.8506C24.687 35.9777 23.7033 36.4013 21.1993 38.5616C20.2603 39.3664 19.3661 40.2136 18.7848 40.8066C17.2198 44.5765 16.0125 47.8382 15.476 50.0408V49.9985C15.476 49.9985 15.2971 50.888 14.7158 50.9727C14.1346 51.0574 13.6874 50.2526 13.6874 50.2526C13.598 49.8714 13.4191 49.236 17.1751 40.6372C17.1751 40.5948 17.1751 40.5948 17.2198 40.5524C18.3377 38.0109 19.7685 34.834 21.6465 30.8099C23.3009 27.2941 24.9553 23.7783 26.3414 20.8556H23.8374C17.6669 33.775 10.6469 48.8548 9.39489 53.6413C9.35018 53.8531 9.30547 54.1073 9.26075 54.2343C9.26075 54.2343 9.21604 54.785 8.67947 54.785C8.14291 54.785 8.00877 54.1073 8.00877 54.1073C8.05348 53.9378 8.0982 53.4295 8.14291 53.2601C9.21604 48.6006 16.1467 33.6903 22.3172 20.8979C13.9557 21.0674 5.95193 21.491 2.19598 21.6604C2.19598 21.6604 1.52527 21.3215 1.52527 20.9403C1.52527 20.4744 2.41954 20.3473 2.41954 20.3473C6.39907 20.1778 14.4923 19.8813 22.8537 19.839C27.6828 9.88465 31.9306 1.41288 32.3331 0.608061C32.3331 0.608061 32.5119 -0.112039 33.0485 0.0150375C33.9428 0.26919 33.4956 1.11637 33.4956 1.11637C32.4225 3.31903 28.6218 10.986 24.3293 19.839C25.1789 19.839 25.9837 19.8813 26.8333 19.8813C28.6665 15.9843 29.9632 13.3157 29.9632 13.2733C29.9632 13.2733 30.3657 12.765 30.8128 12.9768C31.2599 13.1463 31.1705 13.7817 31.1705 13.7817C30.1868 15.7725 29.2031 17.8057 28.2194 19.8813C36.2232 19.966 43.6904 20.3896 47.2228 21.4486Z" fill="black" />
        </svg>

      </a>

      <div className='hidden lg:flex items-center justify-center space-x-4'>
        <a href="#" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
        <a href="#" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a href="#" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
        </a>
        <a href="#" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </a>
      </div>
      <div className='lg:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='w-[2rem] h-[2rem]'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h6v6h-6z" />
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        </button>

        <ul
          className={`fixed top-[4rem] md:top-[5rem] left-0 w-full lg:w-auto bg-[#d7ba5a] overflow-hidden transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
            }`}
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Me' },
            { to: '/services', label: 'My Services' },
            { to: '/skills', label: 'My Skills' },
            { to: '/facts', label: 'Facts' },
            { to: '/experience', label: 'My Experiences' },
            { to: '/projects', label: 'My Projects' },
          ].map((item, index) => (
            <li
              key={item.to}
              className={`w-full transition-all duration-500 transform ${isOpen ? `opacity-100 translate-y-0 delay-[${index * 100}ms]` : 'opacity-0 -translate-y-2'
                }`}
            >
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[16px] block p-4 text-[#000] hover:bg-[#b8a14c] ${isActive ? 'bg-[#b8a14c]' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header