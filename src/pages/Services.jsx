import React from 'react'
import './services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const services = [
    {
        id: 1,
        title: 'UI/UX Design',
        description: [
            'Leading Page',
            'User Flow',
            'Wireframing',
            'Prototype',
            'Mobile App Design'
        ]
    },
    {
        id: 2,
        title: 'Development',
        description: [
            'Front-End Development',
            'Back-End Development',
            'Full-Stack Development',
            'Database Management',
            'API Integration Design'
        ]
    },
    // {
    //     id: 3,
    //     title: 'Illustration',
    //     description: [
    //         'Character Design',
    //         'Icon Set',
    //         'Illustration Guide',
    //         'Illustration Set',
    //         'Motion Graphic Design'
    //     ]
    // },
    // {
    //     id: 4,
    //     title: 'App Developement',
    //     description: [
    //         'Android App',
    //         'Ios App',
    //         'Wireframing',
    //         'Prototyping',
    //         'Mobile App Design'
    //     ]
    // }
]

const Services = () => {

    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
                <hr className='w-[2px] h-full bg-[#000]' />
                <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-10 font-[600] service-behind'>
                    <p>How I can help your next project</p>
                    <h1 className='text-[50px] md:text-[70px] xl:text-[100px] font-[600] leading-none pt-3'>What I Do?</h1>
                </div>
            </div>


            <div className='pr-2 my-10 z-[999]'>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={20}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className='flex flex-col justify-start space-y-4 p-6 xl:p-10'>
                                <p className="w-16 xl:w-20 h-16 xl:h-20 text-[20px] xl:text-[24px] flex items-center justify-center border border-black rounded-full">
                                    0{service.id}
                                </p>

                                <div className='w-full text-[20px] xl:text-[30px] text-start'>
                                    <h1 className='text-start'>{service.title}</h1>
                                    <hr className='h-[2px] border-none bg-black' />

                                    <ul className='flex flex-col justify-start items-start text-[16px] mt-5'>
                                        {service.description.map((desc, index) => (
                                            <li key={index} className="before:content-['»'] before:mr-2">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Services