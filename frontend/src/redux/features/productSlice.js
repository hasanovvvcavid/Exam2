import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
};

const baseURL = "http://localhost:3000/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios.get(baseURL);
      return data.products;
    } catch (error) {}
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    try {
      const { data } = await axios.post(baseURL, product);
      return data;
    } catch (error) {}
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const { data } = await axios.delete(`${baseURL}/${id}`);
      return data;
    } catch (error) {}
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.products = state.allProducts?.filter((product) =>
        product.title
          .toLowerCase()
          .includes(action.payload.trim().toLowerCase())
      );
    },
    sortHighestProduct: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price)
    },
    sortLowestProduct: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push = { ...action.payload };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product._id !== action.payload._id);
      });
  },
});

export const { searchProduct, sortHighestProduct, sortLowestProduct } = productSlice.actions;

export default productSlice.reducer;
