import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React, {Suspense} from "react";
import Preloader from "../common/Preloader/Preloader";

export const withSuspense = (Component) => (props) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
        )
}




