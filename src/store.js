import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        language: languageSlice,
    },
});
