import React,{useState} from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../features/Foods/foodSlice';

function Foods() {
    const dispatch=useDispatch()

    const [show,setShow]=useState(false);

    const state=useSelector(state=>state.foods.products);

    const selectedCategory =useSelector((state)=>state.foods.selectedCategory)
    console.log(selectedCategory)

    const handleCategoryClick=(category)=>{
        dispatch(setCategory(category))
    }

    const filteredProducts = selectedCategory
    ? state.filter(product => product.grouping === selectedCategory)
    : state;

  return (
    <div className='max-w-[1200px] m-auto'>
        <div className='flex items-center justify-center mb-6 gap-4' onClick={()=>setShow(!show)}>
        <button onClick={()=>handleCategoryClick("hamburger")} className='bg-gray-300 p-[3px] rounded-lg hover:bg-green-500 duration-300 hover:text-white text-[#333] w-[50px]'>همبرگر</button>
        <button onClick={()=>handleCategoryClick("pizza")} className='bg-gray-300 p-[3px] rounded-lg hover:bg-green-500 duration-300 hover:text-white text-[#333] w-[50px]'>پیتزا</button>
        </div>

    {show&&<div className='flex flex-col w-[300px] md:w-[1000px] md:flex-row lg:flex-row lg:w-[1000px] m-auto items-center justify-center flex-wrap gap-6'>
    {filteredProducts.map((prod)=>(
        <div key={prod.id}> 
        <div className='shadow-xl hover:scale-105 hove:duration-150 p-[20px] rounded-xl bg-gray-100 w-[400px]'>
            <img className='w-full rounded-xl h-[200px] object-cover' src={prod.url} alt="/" />
            <p className='text-center py-4 font-bold'>{prod.name}</p>
        </div>
        </div>
    ))} 
    </div>}

        <div>
            <h2 className='text-end py-4'>منو غذاها</h2>
        </div>
        {!show&&<div className='flex flex-wrap gap-10 items-center justify-center'>
            {state.map((item)=>(
                <div key={item.id} className=' bg-gray-800 p-[20px] rounded-lg hover:scale-105 duration-200'> 
                    <img className='w-[300px] h-[200px] object-cover rounded-lg' src={item.url} alt="/" />
                    <div className='flex items-center justify-between'>
                    <p className='bg-blue-700 inline-block text-white font-bold p-[3px] rounded-xl text-center'>{item.price}</p>
                    <p className='text-white  py-4'>{item.name}</p>
                    </div>
                    <div className='flex items-center justify-center gap-7'>
                    <button className='bg-green-500 p-[5px] rounded-xl text-white font-bold'>ثبت سفارش</button>
                    <button className='bg-red-400 p-[5px] rounded-xl text-white font-bold'>درباره محصول</button>
                    </div>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default Foods