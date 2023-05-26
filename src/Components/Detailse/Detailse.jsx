import React from 'react';
import { useParams } from "react-router-dom";
//Redux
import { useSelector } from 'react-redux';

function Detailse() {
    const {id}=useParams();
    console.log(id);
    const state=useSelector((state)=>state.foods.products)
    const product=state.find((item)=>item.id===Number(id))

    if (!product) {
        return <div>محصول مورد نظر یافت نشد.</div>;
      }

  return (
    <div>
        <img src={product.url} alt="" />
    </div>
  )
}

export default Detailse