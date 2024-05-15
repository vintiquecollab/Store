import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetails: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("http://localhost:3001/product");
  const data = response.json();
  return data;
});

export const getCategoryProduct = createAsyncThunk(
  "products/getCategoryProduct",
  async (category) => {
    const idCategory=category._id
    const response = await fetch(
      `http://localhost:3001/product/category/${idCategory}`
    );
    const data = await response.json(); // Await the response.json() method
    
    return data;
  }
);

export const getDetailProduct = createAsyncThunk("products/getDetailProduct", async (id) => {
  console.log("wa id",id)
  const response = await fetch(`http://localhost:3001/product/${id}`);
  const data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productStatus = STATUS.FAIL;
      })
      .addCase(getDetailProduct.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetails = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProduct.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state) => {
        state.productStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
