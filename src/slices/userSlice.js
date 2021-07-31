import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userInfo,
    loading: false,
    error: null,
};

// Mock function, will be deleted and replaced with axios request
async function simulateLogin() {
    return new Promise((resolve, reject) => {
        let mockUser = require("../assets/mock/user.json");

        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(mockUser), 800);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1500);
        // }
    });
}

// Mock function, will be deleted and replaced with axios request
async function simulateRegister() {
    return new Promise((resolve, reject) => {
        let mockUser = require("../assets/mock/user.json");

        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(mockUser), 800);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1500);
        // }
    });
}

// Mock function, will be deleted and replaced with axios request
async function simulateLogout() {
    return new Promise((resolve, reject) => {
        // if (Math.random() > 0.2) {
        setTimeout(() => resolve(), 800);
        // } else {
        //     setTimeout(() => reject(new Error("fail")), 1500);
        // }
    });
}

export const login = createAsyncThunk(
    "users/login",
    async (payload, { rejectWithValue }) => {
        try {
            const { email, password } = payload;
            // Axios request will be here
            const userInfo = await simulateLogin(email, password);

            return userInfo;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    "users/logout",
    async (payload, { rejectWithValue }) => {
        try {
            // Axios request will be here
            await simulateLogout();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (payload, { rejectWithValue }) => {
        try {
            const { email, password, confirmPassword, firstName, lastName } =
                payload;

            if (password !== confirmPassword) {
                throw new Error("The passwords you entered are not matching.");
            }

            // Axios request will be here
            const userInfo = await simulateRegister(
                email,
                password,
                firstName,
                lastName
            );

            return userInfo;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {
            state.userInfo = [];
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            const userInfo = action.payload;

            state.error = null;
            state.loading = false;
            state.userInfo = userInfo;

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        [login.rejected]: (state, action) => {
            const error = action.payload;

            state.userInfo = [];
            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
        [logout.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.error = null;
            state.loading = false;
            state.userInfo = null;

            localStorage.removeItem("userInfo");
        },
        [logout.rejected]: (state, action) => {
            const error = action.payload;

            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
        [register.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [register.fulfilled]: (state, action) => {
            const userInfo = action.payload;

            state.error = null;
            state.loading = false;
            state.userInfo = userInfo;

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        [register.rejected]: (state, action) => {
            const error = action.payload;

            state.loading = false;
            state.error =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
        },
    },
});

export default userSlice.reducer;
