import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";



let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginName: state.auth.login,
    currentId: state.auth.id,
})


export default connect(mapStateToProps, {
    logout
}) (Header);