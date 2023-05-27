import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
//Redux
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromCart,clrareCart } from '../../features/Foods/foodSlice';


const toPersianNumber = (number) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};


const number = 1234567;
const formattedNumber = toPersianNumber(number);


function Detailse() {
  const dispatch=useDispatch()
    const {id}=useParams();
    const state=useSelector((state)=>state.foods.products)
    const product=state.find((item)=>item.id===Number(id))
    const cartItems=useSelector((state)=>state.foods.cart)
    
    // const filteredPizza=state.filter((item)=>item.grouping==="pizza")

    const filtered=state.filter((item)=>item.id!==Number.id)

    // const random=filteredPizza.sort(()=>0.5 - Math.random())
    const random=filtered.sort(()=>0.5 - Math.random())

    const sliceRandom=random.slice(0,2)

    console.log(filtered);

    if (!product) {
        return <div>محصول مورد نظر یافت نشد.</div>;
      }

      
  return (
    <div className='max-w-[1000px] mx-auto py-10 flex justify-between'>
      <div className='max-w-[400px] shadow-lg p-[6px] rounded-md border-[2px] h-[430px] flex flex-col items-center hover:scale-105 duration-300'>
      <img className='max-w-[300px] h-[230px]' src={product.url} alt="" />
      <span className='py-4 text-[#666]'>سایر غذاها را امتحان کنید</span>
      <div className='w-full'>
        {sliceRandom.map((item)=>(
          <div key={item.id} className='flex border-b-[3px] justify-between mt-4 items-center'> 
          <div className='flex items-center gap-3'>
            <span className='font-bold'>{toPersianNumber(item.price)}</span>
            <span className='text-gray-400 font-bold'>ریال</span>
          </div>
          <Link className='text-gray-600 p-[4px] rounded-xl' to={`/detailse/${item.id}`} key={item.id}>
          {item.name}
          </Link>
          </div>
        ))}
      </div>
    </div>
    <div className='border w-[40%] rounded-md'>
          <div className='flex justify-between py-4 px-3 items-center'>
            <span className='relative'>ریال</span>
              <span className='absolute left-[53.6rem]'>{toPersianNumber(product.price.toLocaleString())}</span>
              <span>{product.name}</span>
          </div>
    </div>
    </div>
  )
}

export default Detailse