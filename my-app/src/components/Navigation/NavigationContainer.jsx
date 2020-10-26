import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";




let mapStateToProps = (state) => ({
    AuthUserId: state.auth.userId,
})



export default compose(
    connect(mapStateToProps, {

    } ),
    withRouter
)(Navigation)