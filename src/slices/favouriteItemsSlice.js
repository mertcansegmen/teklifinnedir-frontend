import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteItems: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchFavouriteItems(userId) {
    return new Promise((resolve, reject) => {
        const mockFavouriteItems = require("../assets/mock/favouriteItems.json");

        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(mockFavouriteItems), 1000);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1000);
        // }
    });
}

export const getFavouriteItems = createAsyncThunk(
    "favouriteItems/getFavouriteItems",
    async (payload, { rejectWithValue }) => {
        try {
            const { userId } = payload;
            // Axios request will be here
            const favouriteItems = await fetchFavouriteItems(userId);

            return favouriteItems;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const favouriteItemsSlice = createSlice({
    name: "favouriteItems",
    initialState,
    reducers: {},
    extraReducers: {
        [getFavouriteItems.pending]: (state) => {
            state.favouriteItems = [];
            state.loading = true;
            state.error = null;
        },
        [getFavouriteItems.fulfilled]: (state, action) => {
            const favouriteItems = action.payload;

            state.favouriteItems = favouriteItems;
            state.error = null;
            state.loading = false;
        },
        [getFavouriteItems.rejected]: (state, action) => {
            const error = action.payload;

            state.favouriteItems = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default favouriteItemsSlice.reducer;
