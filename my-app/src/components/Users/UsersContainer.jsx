import React from "react";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followActionCreator(userId))
        },

        onUnfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))

        },

        onSetUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;