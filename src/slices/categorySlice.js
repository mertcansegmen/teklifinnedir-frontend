import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchCategories() {
    return new Promise((resolve, reject) => {
        const mockCategories = require("../assets/mock/categories.json");
        if (Math.random() > 0.2) {
            setTimeout(() => resolve(mockCategories), 1000);
        } else {
            setTimeout(() => reject(new Error("fail")), 1000);
        }
    });
}

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            const categories = await fetchCategories();

            return categories;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.categories = [];
            state.loading = true;
            state.error = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            const categories = action.payload;

            state.error = null;
            state.loading = false;
            state.categories = categories;
        },
        [getCategories.rejected]: (state, action) => {
            const error = action.payload;

            state.categories = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default categorySlice.reducer;
