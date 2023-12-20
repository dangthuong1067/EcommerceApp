import productsReducer from "./products/products.slice";
//import cartReducer from "./cart/cart.slice";
import authReducer from './auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/user.slice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
    auth: authReducer,
    user: userReducer
  }
})

export default store