import React, { useEffect, useState } from 'react';

//Icons
import Shopping from "../../images/icons/shopping.png";
import hamburgerMenuIcons from "../../images/icons/hamburgermenu.jpg";
import close from "../../images/icons/close.png";
import Home from "../../images/icons/Home.png";

///Redux
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobile,setIsmobile]=useState(false);

  const [open,setOpen]=useState(false);

  const cartItems=useSelector((state)=>state.foods.cart)


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
    <div className='max-w-[1440px] mx-auto h-[100px] shadow-md md:max-w-[1430px] md:text-sm sticky top-0 z-[2000] bg-white'>
      <div className='flex justify-between'>
        {isMobile ?  (
          <div className='flex items-center py-4 gap-[26px]' onClick={()=>setOpen(!open)}>
            <img className='w-[40px] relative cursor-pointer ml-4' src={hamburgerMenuIcons} alt='/'/>
            <div className={open?'fixed top-[100px] w-[200px] bg-slate-200 rounded-xl h-screen flex justify-center z-[100] py-[40px] translate-x-0 ease-in duration-300' : "fixed top-[100px] left-[-110%] bg-slate-200 rounded-xl h-screen flex justify-center z-[100] py-[40px] -translate-x-full duration-300"}>
              <img className='w-[20px] h-[20px] absolute right-3 cursor-pointer top-0 mt-3' src={close} alt='/' onClick={()=>setOpen(!open)}/>
              <img className='w-[30px] h-[30px] absolute left-3 top-0 mt-3' src={Home} alt="/" />
              <ul className='flex relative flex-col items-center py-10'>
                <Link to={"/"}>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>صفحه اصلی</li>
                </Link>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>ثبت سفارش</li>
              <Link to={"/foods"}>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>غذاهای ما</li>
              </Link>
              <Link to={"/foods"}>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>دیدن منو</li>
              </Link>
              <li className='py-[10px] cursor-pointer font-bold text-gray-500 hover:scale-105 duration-300'>درباره ما</li>
              </ul>
            <div className='absolute bottom-[210px] flex items-center gap-[10px] font-bold'>
              <Link to={"/login"}>
            <button className='bg-white p-[10px] rounded-lg w-[90px] text-gray-700'>ورود</button>
              </Link>
              <Link to={"/sungup"}>
            <button className='bg-white p-[10px] rounded-lg w-[90px] text-gray-700'>ثبت نام</button>
              </Link>
            </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center px-4 py-4 gap-[26px]'>
            <Link to={"/sungup"}>
            <button className='bg-red-500 text-white text-[20px] font-bold p-[5px] w-[160px] h-[40px] rounded-lg'>ورود / ثبت نام</button>
            </Link>
            <Link to={"/shopping"}>
            <img className='w-[40px] h-[40px] relative' src={Shopping} alt='shop'/>
            </Link>
              <span className='absolute left-[220px] top-1 bg-red-500 text-white p-[2px] rounded-lg font-bold md:left-[240px]'>{cartItems.length}</span>
          </div>
        )}

        <div>
          {isMobile ? 
          <div className='flex items-center py-3 px-[15px] gap-6'> 
            <Link to={"/shopping"}>
            <img className='w-[32px]' src={Shopping} alt='/'/>
            </Link>
            <img className='w-[32px] relative' src={Home} alt='/'/>
            {cartItems.map((item)=>(
              <span key={item.id} className='absolute left-[270px] sm:left-[590px]  top-1 bg-red-500 text-white p-[2px] rounded-lg font-bold md:left-[240px]'>{item.quantity}</span>
            ))}
          </div>
          :<div className='flex items-center py-[20px] mr-4'>
            <div>
            <ul className='flex items-center px-[10px] text-1xl'>
              <li className='px-[10px] cursor-pointer text-gray-500'>درباره ما</li>
              
              <li className='px-[10px] cursor-pointer text-gray-500'>ثبت سفارش</li>
              <Link to={"/foods"}>
              <li className='px-[10px] cursor-pointer text-gray-500'>غذاهای ما</li>
              </Link>
              <Link to={"/"}>
              <li className='px-[10px] cursor-pointer text-gray-500'>صفحه اصلی</li>
              </Link>
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