import React from "react";
import User from "./User/User";
import classes from "./Users.module.scss"
import Pagination from "../common/Pagination/Pagination";
import {usersType} from "../../types/types";
import UsersSearchForm from "./Search-form/Search-form";
import {filterType} from "../../redux/reducers/users-reducer";


const Users: React.FC<PropsType> = (props) => {

    let usersArray = props.users.map((user:usersType) => {
        return (
            <User
                key={user.id}
                user={user}
                getFollow={props.getFollow}
                getUnfollow={props.getUnfollow}
                followingInProgress={props.followingInProgress}
            />
        )
    })

    return (
        <div className={classes.usersComponent}>
            <UsersSearchForm
                filterChanged={props.filterChanged}
            />
            <Pagination
                totalItemsCount={props.totalItemsCount}
                pageSize={props.pageSize}
                pageChanged={props.pageChanged}
                currentPage={props.currentPage}
                portionSize={props.portionSize}
            />
            <ul className={classes.users__list}>
                {usersArray}
            </ul>
        </div>
    )
}

export default Users





type PropsType = {
    getFollow: (userId: number) => void,
    getUnfollow: (userId: number) => void,
    followingInProgress: Array<number>,
    users: Array<usersType>,
    totalItemsCount: number,
    pageSize: number,
    pageChanged: (pageNumber: number) => void,
    currentPage: number,
    portionSize: number,
    filterChanged: (filter: filterType) => void
}
