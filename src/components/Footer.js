import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <>

            <footer id='footer' className='bg-gray-800 text-white lg:py-12 mt-10'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
                    <a href='#contectinfo' className='font-bold font-serif'>Contect info</a>
                    <div><ol>
                        <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
                            <FaMapMarkerAlt size={20} className='mr-1' />
                            123 Main Street, City, Country
                        </span>
                        <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
                            <FaEnvelope size={20} className='mr-1' />
                            211029@students.au.edu.pk
                        </span>
                        <span className='flex items-center hover:underline my-2 hover:text-gray-700 transition duration-300 text-white'>
                            <FaWhatsapp size={20} className='mr-1' />
                            +92 3078614221
                        </span>

                    </ol>
                    </div>
                    <div className='flex space-x-4'>
                        <a
                            href='https://github.com/yourusername'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-gray-400 transition duration-300'
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/abu-bakar-0b3003229/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-gray-400 transition duration-300'
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/abu-bakar-0b3003229/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-gray-400 transition duration-300'
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href='https://web.facebook.com/?_rdc=1&_rdr'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-gray-400 transition duration-300'
                        >
                            <FaFacebook size={24} />
                        </a >
                    </div>

                    <div className='text-center md:text-left'>
                        <p className='text-gray-400'>
                            &copy; 2023 ABU BAKAR. All rights reserved.
                        </p>
                        <p className='text-gray-400'>
                            Built with <a href='https://reactjs.org/' className='hover:underline'>React</a> and <a href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;