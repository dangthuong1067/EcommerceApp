import productsReducer from "./products/products.slice";
//import cartReducer from "./cart/cart.slice";
import authReducer from './auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/user.slice'
import homeReducer from "./home/home.slice";
const store = configureStore({
  reducer: {
    // cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    home: homeReducer
  }
})

export default store