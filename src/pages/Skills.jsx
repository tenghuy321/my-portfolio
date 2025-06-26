import "./skills.css"
import {
    CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
    const progressItems = [
        { label: 'HTML', value: 90 },
        { label: 'CSS', value: 90 },
        { label: 'React Js', value: 90 },
        { label: 'JQuery', value: 70 },
        { label: 'Version Control', value: 90 },
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
                        {progressItems.map((item, index) => {
                            const percentage = Math.min(item.value, 100);
                            return (
                                <div key={index} className="my-10">
                                    <div className="flex justify-between mb-1 text-sm font-medium text-[#000]">
                                        <span>{item.label}</span>
                                        <span>{percentage}%</span>
                                    </div>
                                    <div className="w-full bg-[#d9bb59] rounded-full h-[2px]">
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
