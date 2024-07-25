import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'

const Message = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-start justify-start border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md'>
                <div className='flex items-center gap-3'>
                    <div className='flex-none text-gray-300'>
                        <MdCropSquare className='w-5 h-5' />
                    </div>
                    <div className='flex-none text-gray-300'>
                        <RiStarLine className='w-5 h-5' />
                    </div>
                    <div className='flex-1 ml-4'>
                        <p className='text-gray-600 truncate inline-block max-w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nesciunt?</p>
                    </div>
                    {/* <div className='flex-none text-gray-400 text-sm'>
                        Time
                    </div> */}
                </div>
            </div>
            <div className='flex-none text-gray-400 text-sm pr-10'>
                Time
            </div>
        </div>
    )
}

export default Message