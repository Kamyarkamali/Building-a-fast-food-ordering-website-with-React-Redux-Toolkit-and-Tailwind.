import React, { useEffect, useState } from 'react'

//Icon
import { BsChevronBarLeft, BsChevronBarRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"

//images
import image1 from "../../images/mahbobtarinha/1.jpg";
import image2 from "../../images/mahbobtarinha/2.jpg";
import image3 from "../../images/mahbobtarinha/3.jpg";
import image4 from "../../images/mahbobtarinha/4.jpg";
import image5 from "../../images/mahbobtarinha/5.jpg";



const slider=[
  {id:1,url:image1},
  {id:2,url:image2},
  {id:3,url:image3},
  {id:4,url:image4},
  {id:5,url:image5},
]

function SliderImages() {
  const [current,setCurrent]=useState(0);

  const prevState=()=>{
    const isFristState=current===0;

    const newIndex=isFristState ? slider.length -1 : current -1;
    setCurrent(newIndex)
  }

  const newtState=()=>{
    const isFristState=current===slider.length-1

    const newIndex=isFristState ? 0 : current +1
    setCurrent(newIndex)
  }

  const goToSlide=(slidIndex)=>{
    setCurrent(slidIndex)
  }

  useEffect(()=>{
    const timer=setInterval(()=>{
      const index=(current + 1) % slider.length
      setCurrent(index)
    },3000)

    return ()=>clearInterval(timer)

  },[current])

  return (
    <div className='w-[400px] h-[600px] m-auto  py-16 relative duration-300 group flex flex-col justify-center sm:w-[560px] md:w-[600px] lg:w-[1200px]'>
      <div style={{backgroundImage:`url(${slider[current].url})`}} className='w-[400px] object-cover h-[300px] rounded-2xl bg-center bg-cover duration-300 sm:w-[600px] sm:h-[400px] md:w-[700px] md:h-[500px] lg:w-[1200px]  md:object-cover'>
      </div>
      <div className='hidden group-hover:block duration-300 absolute top-[51%] -translate-x-0 translate-y-[-50%] left-5 text-2xl bg-black/20 rounded-full cursor-pointer text-white md:left-0'>
        <BsChevronBarLeft size={30} onClick={prevState}/>
      </div>
      <div className='hidden group-hover:block duration-300 absolute top-[51%] -translate-x-0 translate-y-[-50%] right-5 text-2xl bg-black/20 rounded-full cursor-pointer text-white sm:right-[330px] md:right-[-90px] lg:right-0'>
        <BsChevronBarRight size={30} onClick={newtState}/>
      </div>
      <div className='flex justify-center items-center mr-[10px] sm:mr-[-20px] md:mr-[-100px]'>
        {slider.map((item,slidIndex)=>(
          <div className='cursor-pointer text-2xl py-7 ' onClick={()=>goToSlide(slidIndex)} key={slidIndex}> 
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderImages