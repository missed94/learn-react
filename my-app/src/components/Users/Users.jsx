import React from "react";
import User from "./User/User";
import classes from "./Users.module.scss"




const Users = (props) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let usersArray = props.users.map((user, index) => {
        return (
            <User
                key={user.id}
                user={user}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        )
    })

    return (
        <div className={classes.usersComponent}>
            <ul className={classes.pagination}>
                {pages.map(page => {
                    return (
                        <li className={classes.pagination__item}>
                            <a onClick={() => {props.pageChanged(page)}}
                               className={
                                   props.currentPage === page
                                       ? classes.pagination__link_active
                                       : classes.pagination__link}>
                                {page}
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