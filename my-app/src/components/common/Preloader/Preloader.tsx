import React from "react";
import classes from "./Preloader.module.scss";
import preloader from "./preloader.gif";


const Preloader = () => {

    return (
        <div className={classes.preloaderComponent}>
            <img className={classes.preloaderImg} src={preloader}/>
        </div>
    )
}

export default Preloader