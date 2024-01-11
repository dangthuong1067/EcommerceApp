import productsReducer from "./products/products.slice";
//import cartReducer from "./cart/cart.slice";
import authReducer from './auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/user.slice'
import homeReducer from "./home/home.slice";
import staticSlice from "./staticData/staticData.slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    home: homeReducer,
    staticData: staticSlice
  }
})

export default store