import {configureStore} from '@reduxjs/toolkit';
import {translateReducer} from "./TranslateReducer";
import {authReducer} from "./AuthReducer";


const Store = configureStore({
    reducer: {
        auth: authReducer,
        translation: translateReducer
    }
});

export default Store;