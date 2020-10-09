import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCount,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        onSetCurrentPage: (page) => {
          dispatch(setCurrentPageActionCreator(page))
        },
        onSetTotalUsersCount: (totalCount) => {
          dispatch(setTotalUsersCount(totalCount))
        },
        onSetUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;