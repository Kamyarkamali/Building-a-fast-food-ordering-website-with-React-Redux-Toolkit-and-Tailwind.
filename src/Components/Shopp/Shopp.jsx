import React from 'react';

//Redux
import { useSelector } from 'react-redux';

function Shopp() {
    const state=useSelector((state)=>state.foods.cart)
    console.log(state)
  return (
    <div>
        {state.map((item)=>(
            <div key={item.id}> 
                <img src={item.url} alt="/" />
                <span>{item.quantity}</span>
            </div>
        ))}
    </div>
  )
}

export default Shopp