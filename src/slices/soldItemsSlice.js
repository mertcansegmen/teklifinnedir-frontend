import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    soldItems: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchSoldItems(userId) {
    return new Promise((resolve, reject) => {
        const mockSoldItems = require("../assets/mock/soldItems.json");

        if (Math.random() > 0.1) {
            setTimeout(() => resolve(mockSoldItems), 1000);
        } else {
            const errorMessage =
                "Error while getting sold items. Please try again later.";
            setTimeout(() => reject(new Error(errorMessage)), 1000);
        }
    });
}

export const getSoldItems = createAsyncThunk(
    "soldItems/getSoldItems",
    async (payload, { rejectWithValue }) => {
        try {
            const { userId } = payload;
            // Axios request will be here
            const soldItems = await fetchSoldItems(userId);

            return soldItems;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const soldItemsSlice = createSlice({
    name: "soldItems",
    initialState,
    reducers: {},
    extraReducers: {
        [getSoldItems.pending]: (state) => {
            state.soldItems = [];
            state.loading = true;
            state.error = null;
        },
        [getSoldItems.fulfilled]: (state, action) => {
            const soldItems = action.payload;

            state.soldItems = soldItems;
            state.error = null;
            state.loading = false;
        },
        [getSoldItems.rejected]: (state, action) => {
            const error = action.payload;

            state.soldItems = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default soldItemsSlice.reducer;
