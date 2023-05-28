import React from 'react';

//Redux
import { useSelector,useDispatch } from 'react-redux';
import {removeItem,setCheckout} from '../../features/Foods/foodSlice';
import { useParams } from 'react-router-dom';


function Shopp() {

  const handelcke=()=>{
    dispatch(setCheckout(true))
  }

  const checkout = useSelector((state) => state.foods.checkout);
    const state=useSelector((state)=>state.foods.cart)
    console.log(checkout)
    const dispatch=useDispatch()
  return (
    <div className='max-w-[700px] shadow-lg border m-auto mt-11 rounded-lg max-h-[300px]'>
      {checkout ? (
        <p className='text-center'>پرداخت موفقیت آمیز بود</p>
      ):(
        <div>
            {state.map((item)=>(
              <div className='flex justify-between px-4 text-center py-3 relative'> 
                <span>{item.price}</span>
                <span>{item.name}</span>
              </div>
            ))}
        </div>

      )

    }
        <div className='flex justify-center py-4'>
          <button onClick={handelcke} className='bg-blue-600 p-[4px] mt-[3] text-white rounded-lg'>پرداخت</button>
        </div>
    </div>
  )
}

export default Shopp