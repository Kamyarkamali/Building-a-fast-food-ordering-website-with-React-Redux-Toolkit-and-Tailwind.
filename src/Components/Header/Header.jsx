import React, { useEffect, useState } from 'react';

//Icons
import Shopping from "../../images/icons/shopping.png";
import hamburgerMenuIcons from "../../images/icons/hamburgermenu.jpg";
import close from "../../images/icons/close.png";
import Home from "../../images/icons/Home.png";

function Header() {
  const [isMobile,setIsmobile]=useState(false);

  const [open,setOpen]=useState(false);

  useEffect(()=>{
    const handelers=()=>{
      if(window.innerWidth <768){
        setIsmobile(true)
      } else{
        setIsmobile(false)
      }
    }
    window.addEventListener("resize",handelers)

    return ()=>{
      window.removeEventListener("resize",handelers)
    }
  },[])


 

  return (
    <div className='max-w-[1440px] mx-auto h-[100px] shadow-md md:max-w-[1430px] md:text-sm'>
      <div className='flex justify-between'>
        {isMobile ?  (
          <div className='flex items-center py-4 gap-[26px]' onClick={()=>setOpen(!open)}>
            <img className='w-[40px] relative cursor-pointer ml-4' src={hamburgerMenuIcons} alt='/'/>
            <div className={open?'fixed top-[100px] w-[200px] bg-slate-200 rounded-xl h-screen flex justify-center z-[100] py-[40px] translate-x-0 ease-in duration-300' : "fixed top-[100px] left-[-110%] bg-slate-200 rounded-xl h-screen flex justify-center z-[100] py-[40px] -translate-x-full duration-300"}>
              <img className='w-[20px] h-[20px] absolute right-3 cursor-pointer top-0 mt-3' src={close} alt='/' onClick={()=>setOpen(!open)}/>
              <img className='w-[30px] h-[30px] absolute left-3 top-0 mt-3' src={Home} alt="/" />
              <ul className='flex relative flex-col items-center py-10'>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>صفحه اصلی</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>ثبت سفارش</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>غذاهای ما</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>سر زدن به آشپزخانه</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>ارسالی های مشتریان</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>دیدن منو</li>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>درباره ما</li>
              </ul>
            <div className='absolute bottom-[210px] flex items-center gap-[10px] font-bold'>
            <button className='bg-white p-[10px] rounded-lg w-[90px] text-gray-700'>ورود</button>
            <button className='bg-white p-[10px] rounded-lg w-[90px] text-gray-700'>ثبت نام</button>
            </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center px-4 py-4 gap-[26px]'>
            <button className='bg-red-500 text-white text-[20px] font-bold p-[5px] w-[160px] h-[40px] rounded-lg'>ورود / ثبت نام</button>
            <img className='w-[40px] h-[40px] relative' src={Shopping} alt='shop'/>
            <span className='absolute left-[220px] top-1 bg-red-500 text-white p-[2px] rounded-lg font-bold md:left-[240px]'>0</span>
          </div>
        )}
        <div>
          {isMobile ? 
          <div className='flex items-center py-3 px-[15px] gap-6'> 
            <img className='w-[32px]' src={Shopping} alt='/'/>
            <img className='w-[32px] relative' src={Home} alt='/'/>
            <span className='absolute top-[-1px] right-[100px] bg-red-600 text-white p-[3px] rounded-lg'>0</span>
          </div>
          :<div className='flex items-center py-[20px] mr-4'>
            <div>
            <ul className='flex items-center px-[10px] text-1xl'>
              <li className='px-[10px] cursor-pointer text-gray-500'>درباره ما</li>
              {/* <li className='px-[10px] cursor-pointer text-gray-500'>ارسالی های مشتریان</li> */}
              {/* <li className='px-[10px] cursor-pointer text-gray-500'>سر زدن به آشپزخانه</li> */}
              <li className='px-[10px] cursor-pointer text-gray-500'>ثبت سفارش</li>
              {/* <li className='px-[10px] cursor-pointer text-gray-500'>دیدن منو</li> */}
              <li className='px-[10px] cursor-pointer text-gray-500'>غذاهای ما</li>
              <li className='px-[10px] cursor-pointer text-gray-500'>صفحه اصلی</li>
            </ul>
            </div>
              <img className='w-[40px]' src={Home} alt="/" />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Header