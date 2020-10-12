import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";


class UsersContainer extends React.Component {

    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false);
            })
    }

    pageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageChanged={this.pageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


/*
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
        },
        onToggleIsFetching: (isFetching) => {
            dispatch(isFetchingActionCreator(isFetching))
        }
    }
}
*/


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        toggleIsFetching
    }
)(UsersContainer);