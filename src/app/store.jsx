import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productsSlice from "../features/Foods/foodSlice";
import logger from "redux-logger"

const store=configureStore({
    reducer:{foods:productsSlice},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store;