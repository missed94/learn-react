import React from "react";
import classes from "./Users.module.scss";
import User from "./User/User";
import * as axios from "axios";


const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")

                .then(response => {
                    props.onSetUsers(response.data.items)
                })
        }
    }


    let usersArray = props.users.map((user, index) => {
        return (
            <User
                key={user.id}
                user={user}
                onFollow={props.onFollow}
                onUnfollow={props.onUnfollow}
            />
        )
    })

    return (
        <div className={classes.usersComponent}>
            <button onClick={getUsers}>Get users</button>
            <ul className={classes.users__list}>
                {usersArray}
            </ul>
        </div>
    );
};

export default Users;