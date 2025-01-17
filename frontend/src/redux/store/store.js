import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "../features/basketSlice";
import productSlice from "../features/productSlice";

const persistProductConfig = {
  key: "root",
  storage,
};
const persistBasketConfig = {
  key: "basket",
  storage,
};

const persistedProductReducer = persistReducer(
  persistProductConfig,
  productSlice
);
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice);

export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    basket: persistedBasketReducer,
  },
});

export const persistor = persistStore(store);
export default store;
