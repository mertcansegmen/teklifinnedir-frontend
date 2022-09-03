import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null,
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchProduct() {
    return new Promise((resolve, reject) => {
        const mockProduct = require("../assets/mock/product.json");

        if (Math.random() > 0.1) {
            setTimeout(() => resolve(mockProduct), 1500);
        } else {
            setTimeout(() => reject(new Error("fail")), 1500);
        }
    });
}

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            const product = await fetchProduct();

            return product;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.product = null;
            state.loading = true;
            state.error = null;
        },
        [getProduct.fulfilled]: (state, action) => {
            const product = action.payload;

            state.error = null;
            state.loading = false;
            state.product = product;
        },
        [getProduct.rejected]: (state, action) => {
            const error = action.payload;

            state.product = null;
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default productSlice.reducer;
