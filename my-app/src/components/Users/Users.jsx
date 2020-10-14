import React from "react";
import User from "./User/User";
import classes from "./Users.module.scss"
import {getFollow, getUnfollow, toggleFollowingInProgress} from "../../redux/users-reducer";




const Users = (props) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

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
            <ul className={classes.pagination}>
                {pageNumbers.map(pageNumber => {
                    return (
                        <li className={classes.pagination__item}>
                            <a onClick={() => {props.pageChanged(pageNumber)}}
                               className={
                                   props.currentPage === pageNumber
                                       ? classes.pagination__link_active
                                       : classes.pagination__link}>
                                {pageNumber}
                            </a>
                        </li>
                    )
                })}

            </ul>
            <ul className={classes.users__list}>
                {usersArray}
            </ul>
        </div>
    )
}

export default Users