import React from 'react';
import { Link, useParams } from "react-router-dom";
//Redux
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromCart,clrareCart } from '../../features/Foods/foodSlice';

function Detailse() {
  const dispatch=useDispatch()
    const {id}=useParams();
    const state=useSelector((state)=>state.foods.products)
    const product=state.find((item)=>item.id===Number(id))
    const cartItems=useSelector((state)=>state.foods.cart)

    const filteredPizza=state.filter((item)=>item.grouping==="pizza")

    const random=filteredPizza.sort(()=>0.5 - Math.random())

    const sliceRandom=random.slice(0,2)

    
  

    if (!product) {
        return <div>محصول مورد نظر یافت نشد.</div>;
      }
      
  return (
    <div className='w-[1200px] mx-auto py-10'>
      <div className='w-[500px] shadow-lg p-[5px] flex flex-col items-center hover:scale-105 duration-300'>
      <img className='w-[400px] rounded-xl' src={product.url} alt="" />
      <span className='py-4 text-[#666]'>سایر پیتزاها را امتحان کنید</span>
      <div className='w-full py-[10px]'>
        {sliceRandom.map((item)=>(
          <div key={item.id} className='flex justify-between'> 
            <span>{item.price}</span>
          <button className='bg-gray-300 text-gray-600 p-[4px] rounded-xl' key={item.id}>{item.name}</button>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Detailse