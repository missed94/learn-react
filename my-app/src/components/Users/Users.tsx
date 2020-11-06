import React, {FC} from "react";
import User from "./User/User";
import classes from "./Users.module.scss"
import Pagination from "../common/Pagination/Pagination";
import {usersType} from "../../types/types";


type PropsType = {
    getFollow: (userId: number) => void,
    getUnfollow: (userId: number) => void,
    followingInProgress: Array<number>,
    users: Array<usersType>,
    totalItemsCount: number,
    pageSize: number,
    pageChanged: (pageNumber: number) => void,
    currentPage: number,
    portionSize: number
}


const Users: FC<PropsType> = (props) => {

    let usersArray = props.users.map((user:usersType, index:number) => {
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