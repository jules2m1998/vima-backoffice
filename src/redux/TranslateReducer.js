import {createSlice} from '@reduxjs/toolkit';

export const translateSlice = createSlice({
    name: 'translation',
    initialState: {
        lang: "fr"
    },
    reducers: {
        setFr: state => {
            state.lang = "fr";
        },
        setEn: state => {
            state.lang = "en";
        },
    },
});

export const { setFr, setEn } = translateSlice.actions;

export const selectLang = state => state.translation.lang;

export const translateReducer = translateSlice.reducer;