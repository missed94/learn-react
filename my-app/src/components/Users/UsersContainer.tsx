import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    filterType,
    getFollow, getUnfollow, requestUsers
} from "../../redux/reducers/users-reducer";
import {
    getCurrentPage, getFilterObj,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize, getTotalCount, getUsers,
} from "../../redux/selectors/users-selector";
import {usersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";




class UsersContainer extends React.Component<propsType> {

    componentDidMount() { //жизненный цикл, встроенный объект
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    pageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsers(pageNumber, pageSize, filter)
    }

    filterChanged = (filter: filterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
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
                    followingInProgress={this.props.followingInProgress}
                    getFollow={this.props.getFollow}
                    portionSize={this.props.portionSize}
                    filterChanged={this.filterChanged}
                />
            </>
        );
    }
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
        filter: getFilterObj(state)
    }

}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect(
    mapStateToProps,
    {
        requestUsers,
        getFollow,
        getUnfollow
    }
)(UsersContainer);






type mapStatePropsType = {
    users: Array<usersType>,
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    portionSize: number,
    filter: filterType
}

type mapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number, filter: filterType) => void
    getFollow: (userId: number) => void,
    getUnfollow: (userId: number) => void,
}

type propsType = mapStatePropsType & mapDispatchPropsType