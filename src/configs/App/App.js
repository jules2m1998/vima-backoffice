import React from 'react';
import Routes from "../../routes";
import LoginPage from '../../pages/CommonModule/Login';
import axios from "axios";
import {useDispatch} from "react-redux";
import {logoutAction} from "../../redux/AuthReducer";

const App = () => {

  const dispatch = useDispatch();
  const profileURL = process.env.REACT_APP_SERVER_URL + 'api/v1/particular/profile/me';
  const authURL = process.env.REACT_APP_SERVER_URL + 'api/v1/auth/Login/particular';

  axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Content-Type'] = "application/json";
        config.headers['Accept'] = "application/json";
        return config;
      },
      error => {
        Promise.reject(error)
      });
  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response.status === 404 && error.config.url === profileURL) {
      dispatch(logoutAction());
      return null;
    }
    if ((error.response.status !== 401)
        || (error.config.url.includes(authURL) && error.response.status === 401)
        || (error.response.status !== 401)){
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    dispatch(logoutAction());
  });

  return (
      <>
        {/* <Routes/> */}
        <LoginPage />
      </>
  );

}

export default App;
