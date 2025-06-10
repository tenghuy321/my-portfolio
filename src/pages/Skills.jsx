import "./skills.css"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

const Skills = () => {

    const progressData = [
        { value: 70, label: "Design", color: "#000" },
        { value: 85, label: "Branding", color: "#000" },
        { value: 70, label: "Ecommerce", color: "#000" },
    ];

    const [progress, setProgress] = useState(
        progressData.map(() => 0) // start all at 0
    );

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setProgress((prev) =>
                prev.map((val, index) =>
                    val < progressData[index].value ? val + 1 : val
                )
            );
        }, 15); // Speed of animation

        return () => clearInterval(animationInterval);
    }, []);


    const progressItems = [
        { label: 'Front-End Development', value: 70 },
        { label: 'Back-End Development', value: 50 },
        { label: 'Full-Stack Development', value: 75 },
        { label: 'Database Management', value: 90 },
        { label: 'Version Control', value: 90 },
        { label: 'API Integration', value: 90 },
    ];


    return (
        <div className='w-full h-full'>
            <div className='w-full h-[5rem] md:h-[10rem] flex items-center'>
                <hr className='w-[2px] h-full bg-[#000]' />
                <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-4 xl:pl-10 font-[600] skill-behind mt-4'>
                    <p>Design Skills</p>
                    <div className=''>
                        <h1 className='text-[25px] md:text-[30px] lg:text-[40px] font-[600] leading-none pt-4 md:pt-10'>Highlight My Expertise in:</h1>
                    </div>

                </div>
            </div>

            <div className='w-full mt-[4rem] xl:mt-[8rem]'>
                <div className="flex flex-col xl:flex-row items-start">
                    <div className="w-full flex items-center h-[4rem] md:h-[8rem]">
                        <hr className='w-[2px] h-full bg-[#000]' />
                        <div className='flex flex-col text-[18px] sm:text-[20px] lg:text-[30px] pl-4 lg:pl-10 mt-4'>
                            <h1 className="text-[30px] lg:text-[40px] font-[600]">Developer Skills</h1>
                            <p>Highlight My Expertise in:</p>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 w-full lg:w-full">

                        <div className="flex gap-4 justify-center mt-4 md:mt-0">
                            {progress.map((val, index) => (
                                <div key={index} className="text-center">
                                    <CircularProgressbar
                                        value={val}
                                        text={`${val}%`}
                                        styles={buildStyles({
                                            pathColor: progressData[index].color,
                                            textColor: "#111",
                                            trailColor: "#e5e7eb",
                                        })}
                                    />
                                    <button className="px-4 py-2 border border-black rounded-full text-[12px] md:text-[16px] text-black transition-all duration-200 hover:tracking-wider hover:bg-black hover:text-white mt-4">{progressData[index].label}</button>
                                </div>
                            ))}
                        </div>

                        {progressItems.map((item, index) => {
                            const percentage = Math.min(item.value, 100);
                            return (
                                <div key={index} className="my-10">
                                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                                        <span>{item.label}</span>
                                        <span>{percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-[2px]">
                                        <div
                                            className="bg-[#000] h-full rounded-full transition-all duration-300 ease-in-out"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
