import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import languageSlice from "./slices/languageSlice";
import productTypeSlice from "./slices/productTypeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        language: languageSlice,
        productType: productTypeSlice,
        user: userSlice,
    },
});
