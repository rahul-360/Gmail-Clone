import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from 'react-icons/io';
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <GiHamburgerMenu size={"20"}></GiHamburgerMenu>
                    </div>
                    <img className='w-8' src="public\images\Gmail_Logo.png" alt="gmail-logo" srcset="" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gamil</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-60'>
                <div className='flex items-center bg-[#EAF1FB] mx-5 px-2 py-3 rounded-full'>
                    <IoIosSearch size={"24px"} className='text-gray-700'></IoIosSearch>
                    <input
                        type="text"
                        placeholder='Search Mail'
                        className='rounded-full w-full bg-transparent outline-none px-1' />
                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <CiCircleQuestion size={"20px"}></CiCircleQuestion>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <CiSettings size={"20px"}></CiSettings>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <PiDotsNineBold size={"20px"}></PiDotsNineBold>
                    </div>
                    <div className='cursor-pointer border-[1px] border-gray-500 rounded-full'>
                        <Avatar src="public\images\profile_img.jpeg" size="35" className='rounded-full'></Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar