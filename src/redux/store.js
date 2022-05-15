// import {configureStore} from '@reduxjs/toolkit';
// import {translateReducer} from "./TranslateReducer";
// import {authReducer} from "./AuthReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from "./reducer";

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

// const Store = configureStore({
//     reducer: {
//         auth: authReducer,
//         translation: translateReducer
//     }
// });

export default store;