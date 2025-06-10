import React from 'react'
import "./facts.css"
const Facts = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
        <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
            <hr className='w-[2px] h-full bg-[#000]' />
            <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-10 font-[600] facts-behind'>
                <p>Some interesting facts about me</p>
                <h1 className='text-[50px] md:text-[70px] lg:text-[100px] font-[600] leading-none pt-3'>Fun Facts</h1>
            </div>
        </div>

        <div className='w-full px-4 md:px-10 mt-4 md:mt-0'>
            <div className='w-full flex items-center justify-center md:justify-start gap-10 mt-10'>
                <div className='text-center space-y-3 text-[16px] xl:text-[20px] font-[600] tracking-widest'>
                    <h1 className='text-[70px] xl:text-[100px] font-[700] leading-none'>20</h1>
                    <hr className='border border-black' />
                    <p>Finished Projects</p>
                </div>
                <div className='text-center space-y-3 text-[16px] xl:text-[20px] font-[600] tracking-widest'>
                    <h1 className='text-[70px] xl:text-[100px] font-[700] leading-none'>101</h1>
                    <hr className='border border-black' />
                    <p>Happy Customers</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-center md:justify-end gap-10 mt-4'>
                <div className='text-center space-y-3 text-[16px] xl:text-[20px] font-[600] tracking-widest'>
                    <h1 className='text-[70px] xl:text-[100px] font-[700] leading-none'>540</h1>
                    <hr className='border border-black' />
                    <p>Working Hours</p>
                </div>
                <div className='text-center space-y-3 text-[16px] xl:text-[20px] font-[600] tracking-widest'>
                    <h1 className='text-[70px] xl:text-[100px] font-[700] leading-none'>1120</h1>
                    <hr className='border border-black' />
                    <p>Coffe Cups</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts