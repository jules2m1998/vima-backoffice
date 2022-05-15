import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {REACT_APP_API_COMPANY} from "../utils/enum";

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const initialToken = localStorage.getItem('token');
const initialState = localStorage.getItem('state');
const initialConnected = !!initialUser;
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: initialUser,
        connected: initialConnected,
        token: initialToken,
        state: initialState,
        errorLogin: false,
        userInfo: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        loginFailed: (state, action) => {
            state.errorLogin = true;
        },
        loadUser: (state, action) => {
            const user =  {
                "id": action.payload.user.administrator._id,
                "name": action.payload.user.administrator.name,
                "email": action.payload.administrator.email.value,
                "role": action.payload.user.administrator.state
            };
            state.userInfo = action.payload.user;
            localStorage.setItem('user', JSON.stringify(user));
            state.currentUser = user;
            state.connected = true;
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.currentUser = null;
            state.connected = false;
            state.errorLogin = false;
            state.errorMessage = "";
            localStorage.clear();
        }
    },
});

export const loginAction = (token) => async dispatch => {
    try {
        dispatch(loginSuccess({
            token: token
        }));
        dispatch(getUser());
    } catch (e) {
        dispatch(loginFailed());
    }
};

export const logoutAction = () => async dispatch => {
    try {
        dispatch(logoutSuccess());
    } catch (e) {
        dispatch(loginFailed());
    }
};

export const getUser = () => async dispatch => {
    try {
        if (localStorage.token) {
            let res = await axios.get(REACT_APP_API_COMPANY);
            localStorage.setItem('idUser', res.data.data.administrator._id);
            if (res.status === 200) {
                dispatch(loadUser(
                    {
                        user: res.data.data
                    }
                ));
            }
        }
    } catch (e) {
        dispatch(loginFailed());
    }
};


export const currentUserSelector = (state) => state.auth.currentUser;
export const userInfoSelector = state => state.auth.userInfo;
export const errorLoginSelector = state => state.auth.errorLogin;
export const tokenSelector = state => state.auth.token;
export const connectedSelector = state => state.auth.connected;
export const {loginSuccess, logoutSuccess, loadUser,  loginFailed} = authSlice.actions;
export const authReducer = authSlice.reducer;
