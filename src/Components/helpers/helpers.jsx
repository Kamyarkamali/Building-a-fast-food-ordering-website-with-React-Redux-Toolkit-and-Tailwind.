const isInsCart=(state,id)=>{
    const result=!!state.cart.find((item)=>item.id===id)
    return result;
}


export {isInsCart};