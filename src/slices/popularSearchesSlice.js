import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularSearches: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchPopularSearches() {
    return new Promise((resolve, reject) => {
        const mockPopularSearches = require("../assets/mock/popularSearches.json");

        if (Math.random() > 0.5) {
            setTimeout(() => resolve(mockPopularSearches), 1000);
        } else {
            const errorMessage =
                "Error while getting popular searches. Please try again later.";
            setTimeout(() => reject(new Error(errorMessage)), 1000);
        }
    });
}

export const getPopularSearches = createAsyncThunk(
    "searches/getPopularSearches",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            const popularSearches = await fetchPopularSearches();

            return popularSearches;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const popularSearchesSlice = createSlice({
    name: "popularSearches",
    initialState,
    reducers: {},
    extraReducers: {
        [getPopularSearches.pending]: (state) => {
            state.popularSearches = [];
            state.loading = true;
            state.error = null;
        },
        [getPopularSearches.fulfilled]: (state, action) => {
            const popularSearches = action.payload;

            state.error = null;
            state.loading = false;
            state.popularSearches = popularSearches;
        },
        [getPopularSearches.rejected]: (state, action) => {
            const error = action.payload;

            state.popularSearches = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default popularSearchesSlice.reducer;
