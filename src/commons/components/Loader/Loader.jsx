import loading from "../../../assets/icons/loading.gif";
import React, {useEffect} from "react";
import styles from "./Loader.module.css";

const Loader = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.loader}>
            <img className="item-center" src={loading} alt="loading gif"/>
        </div>
    )
};

export default Loader;
