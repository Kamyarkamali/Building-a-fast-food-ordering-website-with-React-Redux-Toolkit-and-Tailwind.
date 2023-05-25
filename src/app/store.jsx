import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../features/Foods/foodSlice";

const store=configureStore({
    reducer:{foods:productsSlice}
})

export default store;