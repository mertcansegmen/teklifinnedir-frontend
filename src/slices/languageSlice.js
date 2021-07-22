import { createSlice } from "@reduxjs/toolkit";
import i18n from "i18next";

const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : null;

const initialState = { language };

export const languageSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        getLanguage: (state) => {
            let language =
                state.language || navigator.language || navigator.userLanguage;

            if (language !== "en-US" && language !== "tr-TR") {
                language = "en-US";
            }

            i18n.changeLanguage(language);

            state.language = language;
        },
        setLanguage: (state, { payload }) => {
            let language = payload;

            if (language !== "en-US" && language !== "tr-TR") {
                language = "en-US";
            }

            localStorage.setItem("language", language);

            i18n.changeLanguage(language);

            state.language = language;
        },
    },
});

export const { getLanguage, setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
