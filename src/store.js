import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice";
import shopReducer from "./features/shop/shopSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
})
