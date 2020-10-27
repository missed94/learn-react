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
    getPageSize, getPortionSize, getTotalCount, getUsers,
} from "../../redux/selectors/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() { //жизненный цикл, встроенный объект
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    pageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }


    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageChanged={this.pageChanged}
                    getUnfollow={this.props.getUnfollow}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    getFollow={this.props.getFollow}
                    portionSize={this.props.portionSize}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }

}

export default connect(
    mapStateToProps,
    {
        toggleFollowingInProgress,
        requestUsers,
        getFollow,
        getUnfollow
    }
)(UsersContainer);