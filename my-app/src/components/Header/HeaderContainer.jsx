import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {getProfile} from "../../redux/reducers/profile-reducer";




let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginName: state.auth.login,
    currentId: state.auth.id,
    photos: state.auth.photos,

})


export default connect(mapStateToProps, {
    logout,
}) (Header);