import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { MdOutlineDrafts } from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const sidebarItems = [
    {
        icon: <LuPencil size={'18px'} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={'18px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'18px'} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'18px'} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'18px'} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'18px'} />,
        text: "More"
    }
]

const Sidebar = () => {
    return (
        <>
            <div className='w-[15%] '>
                <div className='p-3'>
                    <button className='flex items-center gap-2 p-3 rounded-2xl hover:shadow-md bg-[#c2e7ff]'>
                        <LuPencil size={'24px'} />
                        Compose
                    </button>
                </div>
                <div className='text-gray-500'>
                    {
                        sidebarItems.map((item, index) => {
                            return (
                                <div className='flex items-center gap-4 pl-6 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                                    {item.icon}
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar