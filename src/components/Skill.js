import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
const Skill = () => {
    return (
        <><div className=" flex md:flex-row flex-col"  >

            <section className='p-8 m-7 mt-32 space-y-8 '>
                <div className='flex   space-x-3'>
                    <CodeIcon fontSize="large" color="primary" flex=" justify-between" />

                    <div className='rounded-md  transform
					hover:-translate-1 hover:scale-105
					  bg-white p-3'>
                        <div className='font-extrabold text-black'>Design + Development</div>
                        <div className='text-gray-400 '>Clean modern design -optimized for performance ,search engine and converting user to customer</div></div>

                </div>
                <div className='flex space-x-3 '>
                    <BrushIcon fontSize="large" color="primary" />

                    <div className='rounded-md  transform
					hover:-translate-1 hover:scale-105
					  bg-white p-3'>
                        <div className='font-extrabold text-black'>Design + Development</div>
                        <div className='text-gray-400 '>Clean modern design -optimized for performance ,search engine and converting user to customer</div></div>

                </div>
                <div className='flex space-x-3 '>
                    <AdUnitsIcon fontSize="large" color="primary" />
                    <div className='rounded-md  transform
					hover:-translate-1 hover:scale-105
					  bg-white p-3'>
                        <div className='font-extrabold text-black'>Design + Development</div>
                        <div className='text-gray-400 '>Clean modern design -optimized for performance ,search engine and converting user to customer</div></div>

                </div>
            </section>







            <section className="  skills container p-8 m-7  ">
                <div class="title">
                    <h1 className=' p-7 mb-16 text-center  bg-slate-800  rounded-lg'>
                        <h2 className='font-bold font-serif text-4xl'>My Skills</h2>

                        <div className='p-3 m-6 text-center bg-white  text-gray-400 rounded-lg'>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quod ab laudantium possimus molestias sapiente, saepe facilis dolore autem
                            repellat, quo iure tempore nisi perspiciatis. Quasi?Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quod ab laudantium possimus molestias sapiente, saepe facilis dolore autem
                            repellat, quo iure tempore nisi perspiciatis. Quasi</div>



                        <div class="grid gap-4 ">
                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>Photoshop</span>
                                    <span class="w-14">90%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700 rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-11/12"></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>jQuery</span>
                                    <span class="w-14">75%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700  rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-3/4"></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>HTML5</span>
                                    <span class="w-14">85%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700 rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-5/6"></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>CSS3</span>
                                    <span class="w-14">80%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700 rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-4/5"></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>Wordpress</span>
                                    <span class="w-14">60%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700 rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-3/5"></div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="flex justify-between items-center font-semibold">
                                    <span>PHP</span>
                                    <span class="w-14">68%</span>
                                </div>
                                <div class="progress h-4 bg-gray-700 rounded-full">
                                    <div class="progress-bar bg-gray-200 h-full w-8/12"></div>
                                </div>
                            </div>
                        </div>



                    </h1>

                </div>


            </section>


        </div>

        </>
    )
}

export default Skill;
