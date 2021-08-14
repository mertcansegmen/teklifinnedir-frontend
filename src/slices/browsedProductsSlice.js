import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    browsedProducts: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchBrowsedProducts() {
    return new Promise((resolve, reject) => {
        let mockBrowsedProducts = require("../assets/mock/products.json");
        mockBrowsedProducts = mockBrowsedProducts.slice(2, 8);

        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(mockBrowsedProducts), 800);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1500);
        // }
    });
}

export const getBrowsedProducts = createAsyncThunk(
    "products/getBrowsedProducts",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            const browsedProducts = await fetchBrowsedProducts();

            return browsedProducts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const browsedProductsSlice = createSlice({
    name: "browsedProducts",
    initialState,
    reducers: {},
    extraReducers: {
        [getBrowsedProducts.pending]: (state) => {
            state.browsedProducts = [];
            state.loading = true;
            state.error = null;
        },
        [getBrowsedProducts.fulfilled]: (state, action) => {
            const browsedProducts = action.payload;

            state.error = null;
            state.loading = false;
            state.browsedProducts = browsedProducts;
        },
        [getBrowsedProducts.rejected]: (state, action) => {
            const error = action.payload;

            state.browsedProducts = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default browsedProductsSlice.reducer;
