import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WrappedFieldProps} from "redux-form";


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type mapStateToPropsType = {isAuth: boolean}



export function withAuthRedirect<P>(Component: React.ComponentType<P>) {
    let RedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as P}/>
    }
    return connect<mapStateToPropsType, {}, P, AppStateType >(mapStateToPropsForRedirect)(RedirectComponent);
}





