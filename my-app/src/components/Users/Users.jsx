import React from "react";
import User from "./User/User";
import classes from "./Users.module.scss"
import Pagination from "../common/Pagination/Pagination";




const Users = (props) => {

    let usersArray = props.users.map((user, index) => {
        return (
            <User
                key={user.id}
                user={user}
                getFollow={props.getFollow}
                getUnfollow={props.getUnfollow}
                toggleFollowingInProgress={props.toggleFollowingInProgress}
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