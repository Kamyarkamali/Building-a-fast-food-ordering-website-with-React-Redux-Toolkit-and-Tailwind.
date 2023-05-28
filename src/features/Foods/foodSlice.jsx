import { createSlice } from "@reduxjs/toolkit";

//data
import products from "../../Components/data"; 

const initialState={
    isLoading:false,
    products:products,
    selectedCategory:[],
    cart:[],
    error:"",
    totalPrice: 0,
    checkout:false
}


const productsSlice=createSlice({
    name:"foods",
    initialState,
    reducers:{
        product:(state,action)=>{
            state.products.push(action.payload)
        },
        setCategory:(state,action)=>{
            state.selectedCategory=action.payload
        },
        addToCart: (state, action) => {
          const itemIncart=state.cart.find((item)=>item.id===action.payload.id)
          state.checkout=false

          if(itemIncart){
            itemIncart.quantity++;
          } else{
          const newItem= state.cart.push({...action.payload,quantity:1})
          state.cart.push(newItem)
          }
        },

        incrementQuantity:(state,action)=>{
          const item=state.cart.find((item)=>item.id===action.payload)
          if(item&&item.quantity){
            item.quantity++
          }
        },
        decrement:(state,action)=>{
          state.cart=state.cart.map((item)=>{
            if(item.id===action.payload){
              if(item.quantity<=1){
                item.quantity=1
              } else{
                item.quantity--
              }
            }
            return item
          })
        },
        removeItem:(state,action)=>{
          const removeItem=state.cart.filter((item)=>item.id!==action.payload)
          state.cart=removeItem
        },
        resetCart:(state)=>{
          state.cart=[]
        },
        setCheckout: (state, action) => {
          state.checkout = action.payload;
        },
    }
})


export const {product,setCategory,addToCart,removeItem,incrementQuantity,decrement,resetCart,setCheckout}=productsSlice.actions;

export default productsSlice.reducer;
