import React, { useState } from 'react'
import './Project.css'
import project1 from "../assets/images/project-1.png"
import project1_1 from "../assets/images/projects-1.png"
import project1_2 from "../assets/images/projects-2.png"
import project1_3 from "../assets/images/projects-3.png"
import project2 from "../assets/images/project-2.png"
import project3 from "../assets/images/project-3.png"
const Project = () => {

    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);

    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
                <hr className='w-[2px] h-full bg-[#000]' />
                <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-10 font-[600] projects-behind'>
                    <p>Some of my most recent projects</p>
                    <h1 className='text-[50px] md:text-[60px] xl:text-[100px] font-[600] leading-none pt-3'>My Featured Projected</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:mt-10 lg:mb-0 mr-0 md:mr-4'>
                <div className='w-full h-[200px] xl:h-[350px] relative group'>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-2'></div>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-rotate-2'></div>
                    <div className="absolute w-full h-full flex z-[100] items-center justify-center opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                        <button
                            onClick={() => setShowPopup1(!showPopup1)}
                            className="w-20 h-20 flex items-center justify-center bg-[#ffdb66] rounded-full border scale-105 border-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.5">
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </button>
                    </div>

                    {showPopup1 && (
                        <div className="fixed inset-0 z-[200] bg-black/50 flex justify-center items-center px-4 py-8">
                            <div className="bg-[#d9bb59] px-6 py-3 rounded-lg border border-black shadow-lg overflow-y-auto text-center w-full max-w-7xl max-h-[90vh]">
                                <button
                                    onClick={() => setShowPopup1(false)}
                                    className="w-12 h-12 bg-black/50 text-white rounded-full hover:bg-gray-800 float-end mb-4"
                                >
                                    X
                                </button>

                                <div className="mt-4">
                                    <img src={project1_1} alt="" className="w-full h-auto" />
                                    <div className="grid grid-cols-12 text-start py-10 gap-10">
                                        <div className="col-span-12 md:col-span-9 text-[20px] md:text-[25px] font-[600]">
                                            <h1>TechShop</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Designed and developed a fully functional e-commerce platform for a startup specializing in handcrafted goods. The project involved creating a visually appealing user interface, and ensuring an overall smooth shopping experience.
                                            </p>
                                            <h1 className='mt-4'>Project Goals</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.
                                            </p>

                                            <ul className='flex flex-col justify-start items-start text-[16px] mt-5 ml-2'>
                                                <li class="before:content-['+'] before:mr-2">Create a visually cohesive blog that aligns with the influencer's personal brand.</li>
                                                <li class="before:content-['+'] before:mr-2">Implement a secure and reliable payment gateway.</li>
                                                <li class="before:content-['+'] before:mr-2">Ensure the website is responsive and performs well across all devices.</li>
                                                <li class="before:content-['+'] before:mr-2">Optimize the site for search engines to increase organic traffic.</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-12 md:col-span-3 bg-[#d9bb59] border border-red-500 w-full h-full rounded-[10px] text-[14px] md:text-[16px]">
                                            <div className='flex flex-col space-y-2 justify-center ml-6 w-full h-full'>
                                                <div>
                                                    <p className=''>Client</p>
                                                    <h1 className='font-[700]'>Mashroom</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Category</p>
                                                    <h1 className='font-[700]'>User Experience</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Start Date</p>
                                                    <h1 className='font-[700]'>02/08/2023</h1>
                                                </div>
                                                <div>
                                                    <p className=''>End Date</p>
                                                    <h1 className='font-[700]'>01/03/2024</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Tools</p>
                                                    <h1 className='font-[700]'>Adobe Xd, Figma</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-[20px] md:text-[25px] font-[600]'>
                                        <h1>Challenges and Solutions</h1>
                                        <p className="text-[14px] md:text-[16px]">One of the main challenges was optimizing the website's load time while maintaining high-quality images of the products. To address this, I implemented lazy loading for images and used optimized image formats, resulting in a faster, smoother browsing experience without compromising visual quality.</p>
                                    </div>
                                    <div className='flex items-center space-x-4 mt-10 h-[200px] xl:h-[350px]'>
                                        <img src={project1_2} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                        <img src={project1_3} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                    </div>
                                    <div className='text-[20px] md:text-[25px] font-[600] mt-6'>
                                        <h1>Have project in mind? Let's discuss</h1>
                                        <p className="text-[14px] md:text-[16px]">Get in touch with us to see how we can help you with your project</p>
                                    </div>

                                    <form action="" className='grid grid-cols-2 gap-10 text-start'>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder='Your name' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Email</label>
                                            <input type="text" placeholder='Your e-mail' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Service</label>
                                            <input type="text" placeholder='Your service' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Message</label>
                                            <textarea name="message" id="message" placeholder='Your message' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none'></textarea>
                                        </div>
                                    </form>

                                    <button className='block border border-black px-8 py-2 rounded-full my-10'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                    <img src={project1} alt="" className="w-full h-full relative z-50 object-cover object-center" />
                </div>

                <div className='w-full h-[200px] xl:h-[350px] relative group'>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-2'></div>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-rotate-2'> </div>
                    <div className="absolute w-full h-full flex z-[100] items-center justify-center opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                        <button
                            onClick={() => setShowPopup2(!showPopup2)}
                            className="w-20 h-20 flex items-center justify-center bg-[#ffdb66] rounded-full border scale-105 border-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.5">
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </button>
                    </div>

                    {showPopup2 && (
                        <div className="fixed inset-0 z-[200] bg-black/50 flex justify-center items-center px-4 py-8">
                            <div className="bg-[#d9bb59] px-6 py-3 rounded-lg border border-black shadow-lg overflow-y-auto text-center w-full max-w-7xl max-h-[90vh]">
                                <button
                                    onClick={() => setShowPopup2(false)}
                                    className="w-12 h-12 bg-black/50 text-white rounded-full hover:bg-gray-800 float-end mb-4"
                                >
                                    X
                                </button>

                                <div className="mt-4">
                                    <img src={project1_1} alt="" className="w-full h-auto" />
                                    <div className="grid grid-cols-12 text-start py-10 gap-10">
                                        <div className="col-span-12 md:col-span-9 text-[20px] md:text-[25px] font-[600]">
                                            <h1>TechShop</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Designed and developed a fully functional e-commerce platform for a startup specializing in handcrafted goods. The project involved creating a visually appealing user interface, and ensuring an overall smooth shopping experience.
                                            </p>
                                            <h1 className='mt-4'>Project Goals</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.
                                            </p>

                                            <ul className='flex flex-col justify-start items-start text-[16px] mt-5 ml-2'>
                                                <li class="before:content-['+'] before:mr-2">Create a visually cohesive blog that aligns with the influencer's personal brand.</li>
                                                <li class="before:content-['+'] before:mr-2">Implement a secure and reliable payment gateway.</li>
                                                <li class="before:content-['+'] before:mr-2">Ensure the website is responsive and performs well across all devices.</li>
                                                <li class="before:content-['+'] before:mr-2">Optimize the site for search engines to increase organic traffic.</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-12 md:col-span-3 bg-[#d9bb59] border border-red-500 w-full h-full rounded-[10px] text-[14px] md:text-[16px]">
                                            <div className='flex flex-col space-y-2 justify-center ml-6 w-full h-full'>
                                                <div>
                                                    <p className=''>Client</p>
                                                    <h1 className='font-[700]'>Mashroom</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Category</p>
                                                    <h1 className='font-[700]'>User Experience</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Start Date</p>
                                                    <h1 className='font-[700]'>02/08/2023</h1>
                                                </div>
                                                <div>
                                                    <p className=''>End Date</p>
                                                    <h1 className='font-[700]'>01/03/2024</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Tools</p>
                                                    <h1 className='font-[700]'>Adobe Xd, Figma</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-[20px] md:text-[25px] font-[600]'>
                                        <h1>Challenges and Solutions</h1>
                                        <p className="text-[14px] md:text-[16px]">One of the main challenges was optimizing the website's load time while maintaining high-quality images of the products. To address this, I implemented lazy loading for images and used optimized image formats, resulting in a faster, smoother browsing experience without compromising visual quality.</p>
                                    </div>
                                    <div className='flex items-center space-x-4 mt-10 h-[200px] xl:h-[350px]'>
                                        <img src={project1_2} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                        <img src={project1_3} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                    </div>
                                    <div className='text-[20px] md:text-[25px] font-[600] mt-6'>
                                        <h1>Have project in mind? Let's discuss</h1>
                                        <p className="text-[14px] md:text-[16px]">Get in touch with us to see how we can help you with your project</p>
                                    </div>

                                    <form action="" className='grid grid-cols-2 gap-10 text-start'>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder='Your name' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Email</label>
                                            <input type="text" placeholder='Your e-mail' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Service</label>
                                            <input type="text" placeholder='Your service' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Message</label>
                                            <textarea name="message" id="message" placeholder='Your message' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none'></textarea>
                                        </div>
                                    </form>

                                    <button className='block border border-black px-8 py-2 rounded-full my-10'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <img src={project2} alt="" className="w-full h-full relative z-50 object-cover object-center" />
                </div>
                <div className='w-full h-[200px] xl:h-[350px] relative group'>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-2'></div>
                    <div className='absolute w-full h-full z-10 border border-black transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-rotate-2'></div>
                    <div className="absolute w-full h-full flex z-[100] items-center justify-center opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                        <button
                            onClick={() => setShowPopup3(!showPopup3)}
                            className="w-20 h-20 flex items-center justify-center bg-[#ffdb66] rounded-full border scale-105 border-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.5">
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </button>
                    </div>

                    {showPopup3 && (
                        <div className="fixed inset-0 z-[200] bg-black/50 flex justify-center items-center px-4 py-8">
                            <div className="bg-[#d9bb59] px-6 py-3 rounded-lg border border-black shadow-lg overflow-y-auto text-center w-full max-w-7xl max-h-[90vh]">
                                <button
                                    onClick={() => setShowPopup3(false)}
                                    className="w-12 h-12 bg-black/50 text-white rounded-full hover:bg-gray-800 float-end mb-4"
                                >
                                    X
                                </button>

                                <div className="mt-4">
                                    <img src={project1_1} alt="" className="w-full h-auto" />
                                    <div className="grid grid-cols-12 text-start py-10 gap-10">
                                        <div className="col-span-12 md:col-span-9 text-[20px] md:text-[25px] font-[600]">
                                            <h1>TechShop</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Designed and developed a fully functional e-commerce platform for a startup specializing in handcrafted goods. The project involved creating a visually appealing user interface, and ensuring an overall smooth shopping experience.
                                            </p>
                                            <h1 className='mt-4'>Project Goals</h1>
                                            <p className="text-[14px] md:text-[16px]">
                                                Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.
                                            </p>

                                            <ul className='flex flex-col justify-start items-start text-[16px] mt-5 ml-2'>
                                                <li class="before:content-['+'] before:mr-2">Create a visually cohesive blog that aligns with the influencer's personal brand.</li>
                                                <li class="before:content-['+'] before:mr-2">Implement a secure and reliable payment gateway.</li>
                                                <li class="before:content-['+'] before:mr-2">Ensure the website is responsive and performs well across all devices.</li>
                                                <li class="before:content-['+'] before:mr-2">Optimize the site for search engines to increase organic traffic.</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-12 md:col-span-3 bg-[#d9bb59] border border-red-500 w-full h-full rounded-[10px] text-[14px] md:text-[16px]">
                                            <div className='flex flex-col space-y-2 justify-center ml-6 w-full h-full'>
                                                <div>
                                                    <p className=''>Client</p>
                                                    <h1 className='font-[700]'>Mashroom</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Category</p>
                                                    <h1 className='font-[700]'>User Experience</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Start Date</p>
                                                    <h1 className='font-[700]'>02/08/2023</h1>
                                                </div>
                                                <div>
                                                    <p className=''>End Date</p>
                                                    <h1 className='font-[700]'>01/03/2024</h1>
                                                </div>
                                                <div>
                                                    <p className=''>Tools</p>
                                                    <h1 className='font-[700]'>Adobe Xd, Figma</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-[20px] md:text-[25px] font-[600]'>
                                        <h1>Challenges and Solutions</h1>
                                        <p className="text-[14px] md:text-[16px]">One of the main challenges was optimizing the website's load time while maintaining high-quality images of the products. To address this, I implemented lazy loading for images and used optimized image formats, resulting in a faster, smoother browsing experience without compromising visual quality.</p>
                                    </div>
                                    <div className='flex items-center space-x-4 mt-10 h-[200px] xl:h-[350px]'>
                                        <img src={project1_2} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                        <img src={project1_3} alt="" className='w-full h-full object-cover object-center rounded-md' />
                                    </div>
                                    <div className='text-[20px] md:text-[25px] font-[600] mt-6'>
                                        <h1>Have project in mind? Let's discuss</h1>
                                        <p className="text-[14px] md:text-[16px]">Get in touch with us to see how we can help you with your project</p>
                                    </div>

                                    <form action="" className='grid grid-cols-2 gap-10 text-start'>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder='Your name' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4'>
                                            <label htmlFor="name">Email</label>
                                            <input type="text" placeholder='Your e-mail' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Service</label>
                                            <input type="text" placeholder='Your service' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none' />
                                        </div>
                                        <div className='text-[20px] md:text-[25px] mt-4 col-span-2'>
                                            <label htmlFor="name">Message</label>
                                            <textarea name="message" id="message" placeholder='Your message' className='mt-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-black text-[#fff] w-full text-[16px] bg-transparent outline-none'></textarea>
                                        </div>
                                    </form>

                                    <button className='block border border-black px-8 py-2 rounded-full my-10'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <img src={project3} alt="" className="w-full h-full relative z-50 object-cover object-center" />
                </div>
            </div>
        </div>
    )
}

export default Project