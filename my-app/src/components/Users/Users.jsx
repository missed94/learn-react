import React from "react";
import classes from "./Users.module.scss";
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
                this.props.onSetTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.onSetCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
            })
    }


    render() {

        let usersArray = this.props.users.map((user, index) => {
            return (
                <User
                    key={user.id}
                    user={user}
                    onFollow={this.props.onFollow}
                    onUnfollow={this.props.onUnfollow}
                />
            )
        })

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div className={classes.usersComponent}>
                <ul className={classes.pagination}>
                    {pages.map(page => {
                        return (
                            <li className={classes.pagination__item}>
                                <a onClick={() => {this.onPageChanged(page)}} className={this.props.currentPage === page ? classes.pagination__link_active : classes.pagination__link}>
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
        );
    }
}

export default Users;