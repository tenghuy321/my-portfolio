import React from 'react'
import './Experience.css'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: 'Junior Web Developer at Seed Media',
            duration: '(2023 - Present)',
            description: 'Collaborate with UI/UX designers to create visually appealing and intuitive interfaces, integrating PHP Programming for dynamic website functionalities'
        },
        {
            id: 2,
            title: 'Freelance Web Developer',
            duration: '(2022 - 2023)',
            description: 'Designed intuitive and responsive websites and mobile interfaces for various clients. Specialized in user research, wireframing, prototyping, and visual design using Figma. Collaborated closely with developers to ensure smooth handoff and consistent user experiences.'
        },
        // {
        //     id: 3,
        //     title: 'Freelance Web Developer',
        //     duration: '(2021 - 2022)',
        //     description: 'Worked on various freelance projects, creating custom websites for clients across different industries. Improved problem-solving skills and adaptability to client needs.'
        // }
    ]

    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
                <hr className='w-[2px] h-full bg-[#000]' />
                <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-10 font-[600] experience-behind'>
                    <p>Highlight My key Experiences</p>
                    <h1 className='text-[40px] md:text-[70px] lg:text-[100px] font-[600] leading-none pt-3'>My Experience</h1>
                </div>
            </div>

            <div class="relative border-l border-black space-y-10 my-10 mr-10">

                {experiences.map((experience) => (
                    <div key={experience.id} class="relative pl-8 text-[14px] sm:text-[16px]">
                        <div class="absolute -left-[6.5px] top-1 w-3 h-3 bg-black rounded-full"></div>
                        <h3 class="text-lg font-semibold text-gray-900">{experience.duration}</h3>  
                        <p class="text-black font-[700] text-[14px] sm:text-[16px] md:text-[20px]">{experience.title}</p>
                        <p class="text-black">{experience.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Experience