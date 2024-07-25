import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Messages from './Messages'

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary"
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promations"
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social"
  }
]



const Inbox = () => {

  const [mailTypeSelected, setmailTypeSelected] = useState(0);


  return (
    <div className='flex-1 bg-white rounded-xl mx-5]'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700'>
          <div className='flex items-center gap-1 '>
            <div className='flex items-center'>
              <div className='flex items-center justify-center rounded-md hover:bg-gray-200 h-8 px-0.5'>
                <MdCropSquare size={"20px"} className='h-8 w-5' />
              </div>
              <div className='flex items-center justify-center rounded-md hover:bg-gray-200 h-8 w-4 px-1'>
                <FaCaretDown size={"20px"} className='' />
              </div>
            </div>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200'>
            <IoMdRefresh size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-2 '>
          <p className='text-sm text-gray-500'>1-25 of 1000</p>
          <button className='hover:rounded-full hover:bg-gray-300'><MdKeyboardArrowLeft size={"24px"} /> </button>
          <button className='hover:rounded-full hover:bg-gray-300'><MdKeyboardArrowRight size={"24px"} /> </button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {
            mailType.map((item, index) => {
              return (
                <button key={index}
                  className={`${mailTypeSelected === index ? "border-b-4 border-b-blue-700" : "border-b-4 border-b-transparent"}
                  flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
                  onClick={() => { setmailTypeSelected(index) }}>
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              )
            })
          }
        </div>
        <Messages />
      </div>
    </div>
  )
}

export default Inbox