import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (

        <section className='w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center '>
            <div className='w-full h-full flex flex-col items-start justify-center'>
                <h1 className='text-[30px] xl:text-[40px] uppercase font-[500]'>Hi, I'm a freelancer</h1>
                <TypeAnimation
                    sequence={[
                        'Developer',
                        2000,
                        'Designer',
                        2000,
                    ]}
                    wrapper="span"
                    speed={10}
                    className='text-[50px] xl:text-[100px] font-[700] inline-block'
                    // style={{ fontSize: '100px', display: 'inline-block', fontWeight: '700' }}
                    repeat={Infinity}
                />
                <p className='text-[16px] xl:text-[20px] font-[500]'>based Prey veng, Cambodia.</p>
                <div className='w-full flex items-center gap-2 xl:gap-10 mt-10'>
                    <a href="#" className='animate-bounce text-[14px] flex items-center justify-center xl:text-[18px] w-full xl:w-[200px] font-[700] bg-[#000] text-[#fff] px-8 py-3 rounded-full'>View Work</a>
                    <a href="#" className='animate-bounce text-[14px] flex items-center justify-center xl:text-[18px] w-full xl:w-[200px] font-[700] border border-[#000] text-[#000] px-8 py-3 rounded-full'>Contact me</a>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <img src="" alt="img-1" />
            </div>
        </section>
    )
}

export default Home