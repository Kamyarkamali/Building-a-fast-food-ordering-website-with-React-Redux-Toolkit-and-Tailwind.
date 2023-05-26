import { createSlice } from "@reduxjs/toolkit";

//data
import products from "../../Components/data"; 

const initialState={
    isLoading:false,
    products:products,
    selectedCategory:[],
    cart:[],
    error:"",
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
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            const index=state.cart.findIndex((item)=>item.id==action.payload)
            if (index !== -1) {
                state.cart.splice(index, 1);
        }
        },
        clrareCart:(state)=>{
            state.cart=[]
        }
    },
})


export const {product,setCategory,addToCart,removeFromCart,clrareCart}=productsSlice.actions;

export default productsSlice.reducer;
