import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/fonts.css';
import 'antd/dist/antd.css';
import './index.css';
import App from './configs/App/App';
import * as serviceWorker from '../serviceWorkerRegister';
import {Provider} from "react-redux";
import { Offline, Online } from "react-detect-offline";
import Store from "./redux/store";
import ErrorServer from "./pages/CommonModule/ErrorServer";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Online polling={{timeout: 15000}}>
                <App />
            </Online>
            <Offline>
                <ErrorServer
                    title="Pas de connection internet"
                    subTitle="Verifiez votre connection internet s'il vous plait"
                    />
            </Offline>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your App to work offline and load faster, you can change
// unregister() to Register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
