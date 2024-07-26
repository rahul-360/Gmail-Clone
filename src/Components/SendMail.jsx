import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setOpen } from './redux/appSlice';

const SendMail = () => {
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();
    return (
        <div className={`${open ? 'block':'hidden'} bg-white max-w6xl shadow-slate-600 shadow-xl rounded-t-md`}>
            <div className='flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxCross2 size={"10px"} />
                </div>
            </div>
            <form action="" className='flex flex-col p-3 gap-2'>
                <input type="text" placeholder='To' className='outline-none py-1' />
                <input type="text" placeholder='Subject' className='outline-none py-1' />
                <textarea name="message" rows={"10"} cols={"30"} id="" className='outline-none py-1'></textarea>
                <button type='submit' className='bg-[#0b57d0] rounded-full w-fit px-4 text-white font-medium'>Send</button>
            </form>
        </div>
    )
}

export default SendMail