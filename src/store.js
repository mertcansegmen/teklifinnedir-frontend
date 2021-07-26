import { configureStore } from "@reduxjs/toolkit";
import browsedProductsSlice from "./slices/browsedProductsSlice";
import categorySlice from "./slices/categorySlice";
import featuredProductsSlice from "./slices/featuredProductsSlice";
import languageSlice from "./slices/languageSlice";
import popularSearchesSlice from "./slices/popularSearchesSlice";
import productTypeSlice from "./slices/productTypeSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        language: languageSlice,
        productType: productTypeSlice,
        featuredProducts: featuredProductsSlice,
        browsedProducts: browsedProductsSlice,
        popularSearches: popularSearchesSlice,
    },
});
