import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    toggleFollowingInProgress,
     getFollow, getUnfollow, requestUsers
} from "../../redux/reducers/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalCount, getUsers,
} from "../../redux/selectors/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                    getUnfollow={this.props.getUnfollow}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    getFollow={this.props.getFollow}
                />
            </>
        );
    }
}


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
        toggleFollowingInProgress,
        requestUsers,
        getFollow,
        getUnfollow
    }
)(UsersContainer);