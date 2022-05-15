import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {AVAILABLE_LANG} from "../utils/enum";
import {useSelector} from "react-redux";
import {connectedSelector} from "../redux/AuthReducer";
import Loader from "../commons/components/Loader";
import {LastLocationProvider} from 'react-router-last-location';

import Header from "../commons/components/Header";
import Footer from "../commons/components/Footer/Footer";

const Home = lazy(()=> import('../pages/CommonModule/Home'))
const Login = lazy(()=> import('../pages/CommonModule/Login'))
const NotFound = lazy(()=> import('../pages/CommonModule/NotFound'))

// Url mapping
export const Urls = {
    home: {
        path: "/",
        component: Home,
        protected: false
    },
    login: {
        path: "/login",
        component: Login,
        protected: false
    },
    logout: {
        path: "/logout",
        component: <redirect to="/login?lang=fr"/>,
        protected: true,
        scopes: "all"
    }
};

const ProtectedRoute = (props) => {
    const connected = useSelector(connectedSelector);
    localStorage.setItem('previousPath', props.path);
    return connected ?
        <Route exact path={props.path} component={props.component}/>
        : <Redirect to="/login?lang=fr"/>
};

const Routes = () => {
    // Keys of Urls object that are used for creating Routes
    let urlsKeys = [];
    for(let key in Urls){
        urlsKeys.push(key)
    }
    return (
        <>
            <Router>
                <Header />
                <Suspense fallback={Loader}>
                    <LastLocationProvider>
                        <Switch>
                            {urlsKeys.map((entry, entryIndex) => (
                                AVAILABLE_LANG.map((lang, langIndex) => (
                                    Urls[entry].protected ?
                                        <ProtectedRoute
                                            key={`${entryIndex} - ${langIndex}`}
                                            path={`/${lang}${Urls[entry].path}`}
                                            component={Urls[entry].component}
                                        /> : <Route exact
                                                    key={`${entryIndex} - ${langIndex}`}
                                                    path={`/${lang}${Urls[entry].path}`}
                                                    component={Urls[entry].component}
                                        />
                                ))
                            ))};
                            <Route exact path="/" component={Login}/>
                            <Route component={Home} />
                        </Switch>
                    </LastLocationProvider>
                </Suspense>
                <Footer />
            </Router>
        </>
    )
};

export default Routes;
