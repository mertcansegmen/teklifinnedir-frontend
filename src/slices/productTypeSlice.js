import { createSlice } from "@reduxjs/toolkit";

const productType = localStorage.getItem("productType")
    ? localStorage.getItem("productType")
    : null;

const initialState = { productType };

export const productTypeSlice = createSlice({
    name: "productType",
    initialState,
    reducers: {
        getProductType: (state) => {
            const productType = state.productType || "buying";

            state.productType = productType;
        },
        setProductType: (state, { payload }) => {
            const productType = payload;

            localStorage.setItem("productType", productType);

            state.productType = productType;
        },
    },
});

export const { getProductType, setProductType } = productTypeSlice.actions;

export default productTypeSlice.reducer;
