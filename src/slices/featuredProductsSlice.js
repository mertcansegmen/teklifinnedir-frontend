import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    featuredProducts: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchFeaturedProducts() {
    return new Promise((resolve, reject) => {
        const mockFeaturedProducts = require("../assets/mock/products.json");
        if (Math.random() > 0.2) {
            setTimeout(() => resolve(mockFeaturedProducts), 1500);
        } else {
            setTimeout(() => reject(new Error("fail")), 1500);
        }
    });
}

export const getFeaturedProducts = createAsyncThunk(
    "products/getFeaturedProducts",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            const featuredProducts = await fetchFeaturedProducts();

            return featuredProducts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const featuredProductsSlice = createSlice({
    name: "featuredProducts",
    initialState,
    reducers: {},
    extraReducers: {
        [getFeaturedProducts.pending]: (state) => {
            state.featuredProducts = [];
            state.loading = true;
            state.error = null;
        },
        [getFeaturedProducts.fulfilled]: (state, action) => {
            const featuredProducts = action.payload;

            state.error = null;
            state.loading = false;
            state.featuredProducts = featuredProducts;
        },
        [getFeaturedProducts.rejected]: (state, action) => {
            const error = action.payload;

            state.featuredProducts = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default featuredProductsSlice.reducer;
