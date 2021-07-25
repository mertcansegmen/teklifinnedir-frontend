import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import featuredProductsSlice from "./slices/featuredProductsSlice";
import languageSlice from "./slices/languageSlice";
import productTypeSlice from "./slices/productTypeSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        language: languageSlice,
        productType: productTypeSlice,
        featuredProducts: featuredProductsSlice,
    },
});
