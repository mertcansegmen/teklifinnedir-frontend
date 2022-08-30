import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsForSale: [],
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchItemsForSale() {
    return new Promise((resolve, reject) => {
        const mockItemsForSale = require("../assets/mock/itemsForSale.json");

        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(mockItemsForSale), 1000);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1000);
        // }
    });
}

export const getItemsForSale = createAsyncThunk(
    "itemsForSale/getItemsForSale",
    async (payload, { rejectWithValue }) => {
        try {
            const { userId } = payload;
            // Axios request will be here
            const itemsForSale = await fetchItemsForSale(userId);

            return itemsForSale;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const itemsForSaleSlice = createSlice({
    name: "itemsForSale",
    initialState,
    reducers: {},
    extraReducers: {
        [getItemsForSale.pending]: (state) => {
            state.itemsForSale = [];
            state.loading = true;
            state.error = null;
        },
        [getItemsForSale.fulfilled]: (state, action) => {
            const itemsForSale = action.payload;

            state.itemsForSale = itemsForSale;
            state.error = null;
            state.loading = false;
        },
        [getItemsForSale.rejected]: (state, action) => {
            const error = action.payload;

            state.itemsForSale = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default itemsForSaleSlice.reducer;
