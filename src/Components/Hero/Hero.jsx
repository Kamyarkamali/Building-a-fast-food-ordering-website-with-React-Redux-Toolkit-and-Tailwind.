import React from 'react';

//Image
import heroImage from "../../images/hero.jpg";

//Typed
import Typed from '../Typed/TypedText';

function Hero() {
  return (
    <div className='w-[374px] mx-auto sm:w-[650px] sm:mx-auto md:w-[1240px] md:mx-auto'>
        <div className='grid md:flex'>
            <img className='w-[400px] h-[200px] border rounded-lg sm:h-[500px] md:h-[400px] md:w-[540px] lg:w-[700px] lg:h-[500px] sm:w-[1000px]  object-cover md:mt-6 md:rounded-2xl md:object-cover ' src={heroImage} alt="/" />
            <div className='flex flex-col items-center justify-center md:ml-[150px]'>
            <h1 className='text-center py-4 font-bold text-[#333] text-xl md:mt-[30px] md:w-full md:text-2xl'>تجربه غدایی خوب, محیطی گرم با زود فود</h1>
            <p className='text-center text-gray-500 text-[18px] md:mt-[30px]'>هدف اصلی ما رضایت شماست</p>
            <Typed/>
            <button className='bg-red-600 ml-[20px] md:mt-[30px] text-center w-[170px] h-[40px] text-gray-200 font-bold rounded-lg sm:ml-[30px] md:ml-[30px]'>میخواهم سفارش بدهم</button>
            </div>
        </div>
    </div>
  )
}

export default Hero