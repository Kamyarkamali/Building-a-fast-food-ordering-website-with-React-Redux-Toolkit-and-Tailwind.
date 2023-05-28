import React from 'react';
import { Link, useParams } from "react-router-dom";
//Redux
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeItem,incrementQuantity,decrement,resetCart} from '../../features/Foods/foodSlice';

//Helpers
import { isInCart } from '../helpers/helpers';

///Image
const images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbUURM1gsrHhepriY4oEeBuOcSY9RRbxtcg&usqp=CAU";
const starIcon="https://as2.ftcdn.net/v2/jpg/02/22/86/01/1000_F_222860165_iU2ng07ehFQgN5SYc1r3NFu80p1BpRCO.jpg";

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

    
    const getTotalQuantity = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.quantity;
      });
      return total;
    };
    
    const filtered = state.filter((item) => item.id !== Number(id));

    const random=filtered.sort(()=>0.5 - Math.random())

    const sliceRandom=random.slice(0,2)
    console.log(cartItems)

    if (!product) {
        return <div>محصول مورد نظر یافت نشد.</div>;
      }
  return (
    <div className='max-w-[1000px] mx-auto py-10 flex flex-col items-center sm:flex-row md:flex-row lg:flex-row justify-between'>
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
    <div className='border w-[70%] sm:w-[40%] md:sm:w-[40%] lg:sm:w-[40%] rounded-md mt-5'>
          <div className='flex justify-between py-4 px-3 items-center'>
            <span className='relative'>ریال</span>
              <span className='absolute left-[7.7rem] sm:left-[27.5rem] md:left-[53.6rem]'>{toPersianNumber(product.price.toLocaleString())}</span>
              <span>{product.name}</span>
          </div>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center px-3'>
              <span>{toPersianNumber(4.7)}</span>
              <img className='w-[30px]' src={starIcon} alt="/" />
            </div>
            <div className='flex'>
              <span>پیشنهاد سرآشپز</span>
              <img className='w-[40px] rounded-[50%]' src={images} alt="/" />
            </div>
          </div>
          <div className='flex justify-center gap-4 py-8 items-center'>
          {/* <button className='bg-green-600 text-white w-[24px] text-xl rounded-lg' onClick={() => dispatch(addToCart(product))}>ADD</button>
          <button className='bg-green-600 text-white w-[24px] text-xl rounded-lg' onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
            <span className='font-bold text-gray-600'>{getTotalQuantity() ||0}</span>
            <button className='bg-red-600 text-white w-[24px] text-xl rounded-lg' onClick={()=>dispatch(decrement(product.id))}>-</button> */}
            {/* {
              !cartItems.length===0 ? [] : <button onClick={()=>dispatch(addToCart(product))}>ثبت سفارش من</button>
            } */}
            
            {
              cartItems.length===0 ? (
                <button onClick={()=>dispatch(addToCart(product))}>ثبت سفارش</button>
              ) : (
                <div> 
                <button onClick={()=>dispatch(incrementQuantity(product.id))}>+</button>
                <button onClick={()=>dispatch(decrement(product.id))}>-</button>
                {
                  cartItems.length>=1 && (
                    <button onClick={()=>{
                      dispatch(removeItem(product.id))
                      dispatch(resetCart())
                    }}>حذف کلی</button>
                  )
                }
                </div>
              )
            }
            
          </div>
          <div className='flex flex-col items-center py-3'>
            <span className='py-4'>مواد اولیه</span>
            <div>
            <ul>
              <li className='text-sm'>{product.detailse}</li>
            </ul>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Detailse