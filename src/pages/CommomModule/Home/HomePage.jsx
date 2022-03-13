import React from 'react';
import logo from "../../../assets/logos/logoHeader.svg";
import * as styles  from "./HomePage.module.css"

const HomePage = () => {

    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles.AppLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export  default HomePage;