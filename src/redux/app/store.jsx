import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../slices/categorySlice";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import authSlice from "../slices/custemerLogin"

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    auth:authSlice,

  },
});
