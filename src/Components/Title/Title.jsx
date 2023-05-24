import React from 'react'

//Icons
import {AiOutlineArrowDown} from "react-icons/ai";
import chat from "../../images/icons/chat.png";
import vegetables from "../../images/icons/vegetables.png";
import food from "../../images/icons/food.png";

function Title() {
  return (
    <div className='max-w-[1240px] mx-auto py-11'>
        <div className='border-b-[3px] border-gray-400 flex justify-center'>
        </div>
        <div className='flex justify-center p-[10px]'>
            <AiOutlineArrowDown className=' bg-gray-400 text-3xl rounded-[50%] cursor-pointer text-gray-600'/>
        </div>
        <h1 className='text-center text-2xl'>چرا زود فود می تواند یکی از انتخاب های ما باشد؟</h1>

        <div className='shadow-md flex flex-col items-center gap-8 sm:flex sm:flex-row md:flex-row lg:flex-row sm:justify-between md:flex md:justify-between lg:flex lg:justify-between mt-7'>
            <div className='flex border-[1px] border-gray-700 shadow-2xl rounded-lg h-[300px] flex-col items-center w-[300px] hover:scale-105 duration-500'>
                <img className='w-[60px] mt-[40px]' src={chat} alt="/" />
                <p className='mt-10 text-center text-gray-400 leading-[40px]'>ما 24 ساعته در خدمت شما هستیم و سفارشات شما را به هر ناحیه ای از تهران یا شعباتمون ارسال میکنیم</p>
            </div>

            <div className='flex border-[1px] border-gray-700 shadow-2xl rounded-lg h-[300px] flex-col items-center w-[300px] hover:scale-105 duration-500'>
                <img className='w-[60px] mt-[40px]' src={vegetables} alt="/" />
                <p className='mt-10 text-center text-gray-400 leading-[40px]'>تمامی سبزیجات استفاده شده به صورت ارگانیک است,محصولات گوشتی کاملا تازه و تهیه شده از گوشت 100 درصد هستند</p>
            </div>

            <div className='flex border-[1px] border-gray-700 shadow-2xl rounded-lg h-[300px] flex-col items-center w-[300px] hover:scale-105 duration-500'>
                <img className='w-[60px] mt-[40px]' src={food} alt="/" />
                <p className='mt-10 text-center text-gray-400 leading-[40px]'>زود فود در بهترین نقطه خارج از شهر,در طبیعت واقع شده با پرسنلی همیشه آماده برای خدمت به شما!</p>
            </div>
        </div>
            <div className='flex justify-center mt-10'>
              <button className='bg-red-500 text-white p-[11px] w-[200px] rounded-lg'>بیشتر بدانید</button>
            </div>

    </div>
  )
}

export default Title