import { createSlice } from "@reduxjs/toolkit";

//data
import products from "../../Components/data"; 

const initialState={
    isLoading:false,
    products:products,
    selectedCategory:[],
    error:""
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
        }
    }
})


export const {product,setCategory}=productsSlice.actions;

export default productsSlice.reducer;
