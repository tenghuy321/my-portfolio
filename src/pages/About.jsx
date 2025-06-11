import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
        <hr className='w-[2px] h-full bg-[#000]' />
        <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-4 md:pl-10 font-[600] text-behind'>
          <p>Some Word About Me</p>
          <h1 className='text-[40px] md:text-[70px] xl:text-[100px] font-[600] leading-none pt-3'>know me more</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-10 pr-0 sm:pr-5 my-10 items-center'>
        <div className='md:col-span-8 text-[12px] md:text-[14px] xl:text-[16px]'>
          <h1 className='text-[20px] sm:text-[30px] xl:text-[40px] font-[600]'>I'm Tenghuy, a Web Developer</h1>
          <p>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client's requirements is our moto.</p>
          <div className='flex items-center justify-start space-x-4 mt-5 md:mt-10'>
            <a href="https://www.facebook.com/ly.tenghuy.58" className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            {/* <a href="#" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a> */}
            <a href="https://t.me/Teng_huy" className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tenghuyly2330@gmail.com" className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </div>
        </div>
        <div className='md:col-span-4 flex flex-col items-center justify-center text-center border border-black py-10 h-full sm:h-1/2 md:h-full'>
          <h1 className='text-[70px] md:text-[100px] lg:text-[150px] font-[700] leading-none'>01</h1>
          <p>Year Experince</p>
        </div>
      </div>
    </div>
  )
}



export default About