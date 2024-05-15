import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("http://localhost:3001/category");
  const data = await response.json(); // Await the response.json() method
  console.log("data", data);
  return data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
