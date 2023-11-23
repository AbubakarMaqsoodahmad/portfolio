import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/ai";



// import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white w-screen h-20  border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img
                        src='./pic2.jpg'
                        className="h-8 w-8 mr-7 ml-7 rounded-3xl"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center font-extrabold text-2xl  whitespace-nowrap dark:text-white">
                        Portfolio
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${menuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="Home"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Project"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Skill"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#footer"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                        {/* Add more menu items here */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (<>
//         <nav className='bg-gray-800  rounded-sm '>
//             <div className='container ml-2 mx-auto flex justify-between items-center'>
//                 <Link to='/' className='text-white text-4xl font-bold font-serif '>
//                     Portfolio
//                 </Link>
//                 <div className=''>
//                     <div class="p-0 space-y-2 bg-gray-600 rounded shadow">

//                         <button
//                             onClick={toggleMenu}
//                             className='text-white hover:shadow-2xl  focus:ring '
//                         >
//                             <div class="p-4 space-y-2 bg-gray-600 rounded shadow">
//                                 <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
//                                 <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
//                                 <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
//                             </div>
//                         </button>

//                     </div>

//                 </div>
//                 <ul
//                     className={`${menuOpen ? 'block' : 'hidden'
//                         } lg:flex lg:items-center space-y-2 lg:space-y-0 mr-3 lg:space-x-16 mt-4 md:mt-0`}
//                 >
//                     <li>
//                         <Link
//                             to='/'
//                             className='text-white hover:underline font-serif hover:text-gray-700 transition duration-75'
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to='/Project'
//                             className='text-white hover:underline font-serif hover:text-gray-700 transition duration-75'
//                         >
//                             Project
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to='/Skill'
//                             className='text-white hover:underline font-serif hover:text-gray-700 transition duration-75'
//                         >
//                             Skill
//                         </Link>
//                     </li>
//                     <li>
//                         <a
//                             href="#footer"
//                             className='text-white hover:underline font-serif hover:text-gray-700 transition duration-75'
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         {/* <section className='container mx-auto py-16 flex flex-col items-center space-y-8'>
//             <div className='max-w-md text-center'>
//                 <h1 className='text-4xl font-bold'>Welcome to My Portfolio</h1>
//                 <p className='text-lg text-gray-600'>
//                     Hi, I'm ABU BAKAR, a passionate web developer with a love for creating
//                     amazing user experiences.
//                 </p>

//             </div>
//             <div className='w-48 h-48 rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110 '>
//                 <img
//                     src='./pic2.jpg'
//                     alt='Profile'
//                     className='object-cover w-full h-full'
//                 />

//             </div>

//         </section> */}

//         {/* <footer className='bg-gray-900 text-white py-12 mt-40'>
//             <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
//                 <a href='#contectinfo' className='font-bold '>Contect info</a>
//                 <div><ol>
//                     <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
//                         <FaMapMarkerAlt size={20} className='mr-1' />
//                         123 Main Street, City, Country
//                     </span>
//                     <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
//                         <FaEnvelope size={20} className='mr-1' />
//                         211029@students.au.edu.pk
//                     </span>
//                     <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
//                         <FaWhatsapp size={20} className='mr-1' />
//                         +92 3078614221
//                     </span>

//                 </ol>
//                 </div>
//                 <div className='flex space-x-4'>
//                     <a
//                         href='https://github.com/yourusername'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='text-white hover:text-gray-400 transition duration-300'
//                     >
//                         <FaGithub size={24} />
//                     </a>
//                     <a
//                         href='https://www.linkedin.com/in/abu-bakar-0b3003229/'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='text-white hover:text-gray-400 transition duration-300'
//                     >
//                         <FaLinkedin size={24} />
//                     </a>
//                     <a
//                         href='https://www.linkedin.com/in/abu-bakar-0b3003229/'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='text-white hover:text-gray-400 transition duration-300'
//                     >
//                         <FaTwitter size={24} />
//                     </a>
//                     <a
//                         href='https://web.facebook.com/?_rdc=1&_rdr'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='text-white hover:text-gray-400 transition duration-300'
//                     >
//                         <FaFacebook size={24} />
//                     </a >
//                 </div>

//                 <div className='text-center md:text-left'>
//                     <p className='text-gray-400'>
//                         &copy; 2023 ABU BAKAR. All rights reserved.
//                     </p>
//                     <p className='text-gray-400'>
//                         Built with <a href='https://reactjs.org/' className='hover:underline'>React</a> and <a href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</a>.
//                     </p>
//                 </div>
//             </div>
//         </footer> */}
//     </>
//     );
// }
