import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getFollow, getUnfollow, requestUsers
} from "../../redux/reducers/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize, getTotalCount, getUsers,
} from "../../redux/selectors/users-selector";
import {usersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type mapStatePropsType = {
    users: Array<usersType>,
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    portionSize: number,
}

type mapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    getFollow: (userId: number) => void,
    getUnfollow: (userId: number) => void,
}

type propsType = mapStatePropsType & mapDispatchPropsType


class UsersContainer extends React.Component<propsType> {

    componentDidMount() { //жизненный цикл, встроенный объект
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    pageChanged = (pageNumber: number) => {
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
                    followingInProgress={this.props.followingInProgress}
                    getFollow={this.props.getFollow}
                    portionSize={this.props.portionSize}
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
    }

}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        requestUsers,
        getFollow,
        getUnfollow
    }
)(UsersContainer);