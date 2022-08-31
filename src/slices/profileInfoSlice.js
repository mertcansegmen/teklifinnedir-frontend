import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileInfo: null,
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function fetchProfileInfo() {
    return new Promise((resolve, reject) => {
        const mockProfileInfo = require("../assets/mock/profileInfo.json");

        if (Math.random() > 0.5) {
            setTimeout(() => resolve(mockProfileInfo), 1000);
        } else {
            const errorMessage =
                "Error while getting profile info. Please try again later.";
            setTimeout(() => reject(new Error(errorMessage)), 1000);
        }
    });
}

export const getProfileInfo = createAsyncThunk(
    "profileInfo/getProfileInfo",
    async (payload, { rejectWithValue }) => {
        try {
            const { userId } = payload;
            // Axios request will be here
            const profileInfo = await fetchProfileInfo(userId);

            return profileInfo;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const profileInfoSlice = createSlice({
    name: "profileInfo",
    initialState,
    reducers: {},
    extraReducers: {
        [getProfileInfo.pending]: (state) => {
            state.profileInfo = [];
            state.loading = true;
            state.error = null;
        },
        [getProfileInfo.fulfilled]: (state, action) => {
            const profileInfo = action.payload;

            state.profileInfo = profileInfo;
            state.error = null;
            state.loading = false;
        },
        [getProfileInfo.rejected]: (state, action) => {
            const error = action.payload;

            state.profileInfo = null;
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default profileInfoSlice.reducer;
