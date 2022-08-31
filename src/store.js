import { configureStore } from "@reduxjs/toolkit";
import browsedProductsSlice from "./slices/browsedProductsSlice";
import categorySlice from "./slices/categorySlice";
import featuredProductsSlice from "./slices/featuredProductsSlice";
import languageSlice from "./slices/languageSlice";
import popularSearchesSlice from "./slices/popularSearchesSlice";
import productSlice from "./slices/productSlice";
import productTypeSlice from "./slices/productTypeSlice";
import userSlice from "./slices/userSlice";
import profileInfoSlice from "./slices/profileInfoSlice";
import itemsForSaleSlice from "./slices/itemsForSaleSlice";
import soldItemsSlice from "./slices/soldItemsSlice";
import favouriteItemsSlice from "./slices/favouriteItemsSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        language: languageSlice,
        productType: productTypeSlice,
        featuredProducts: featuredProductsSlice,
        browsedProducts: browsedProductsSlice,
        popularSearches: popularSearchesSlice,
        userInfo: userSlice,
        product: productSlice,
        profileInfo: profileInfoSlice,
        itemsForSale: itemsForSaleSlice,
        soldItems: soldItemsSlice,
        favouriteItems: favouriteItemsSlice,
    },
});
