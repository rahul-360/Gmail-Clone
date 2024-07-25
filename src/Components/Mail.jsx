import React from 'react'
import { BiArchiveIn } from 'react-icons/bi'
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineDelete, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from 'react-icons/md'
import { Navigate, useNavigate } from 'react-router-dom'

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div onClick={()=> navigate("/")} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BiArchiveIn size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineReport size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineDelete size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-2 hover:rounded-full '>
          <button className='hover:rounded-full hover:bg-gray-300'><MdKeyboardArrowLeft size={"24px"} /> </button>
          <button className='hover:rounded-full hover:bg-gray-300'><MdKeyboardArrowRight size={"24px"} /> </button>
        </div>
      </div>
      <div className='h-[90vh overflow-y-auto p-4'>
        <div className='flex items-center justify-between bg-white gap-1'>
          <div className='flex items-center gap-2'>
            <h1>Subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-3 py-1'>Inbox</span>
          </div>
          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>24-01-2024</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm'>
          <h1>rahulsharma.cse00@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className='my-10'>
          <p>message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail