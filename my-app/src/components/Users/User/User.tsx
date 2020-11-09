import React, {FC} from "react";
import classes from "./User.module.scss";
import {NavLink} from "react-router-dom";
import {usersType} from "../../../types/types";

type propsType = {
    getFollow: (userId: number) => void,
    getUnfollow: (userId: number) => void,
    followingInProgress: Array<number>,
    user: usersType,
}

const User: FC<propsType> = ({getFollow, getUnfollow, followingInProgress, user, ...props}) => {


    let onFollow = () => {
        getFollow(user.id)
    }
    let onUnfollow = () => {
        getUnfollow(user.id)

    }
    return (
        <li className={classes.userComponent}>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <div className={classes.img_wrap}>

                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null
                                ? user.photos.small
                                : "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}
                                 alt="user"
                            />
                        </NavLink>

                    </div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)} //если хоть одна id из массива равна id пользлвателя при нажатии то ее и disabl'и
                            className={classes.button} onClick={onUnfollow}> unfollow </button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={classes.button} onClick={onFollow}> follow </button>
                    }

                </div>
                <div className={classes.desc}>
                    <div className={classes.nameStatus}>
                        <h4 className={classes.fullName}>
                            Name: <div>{` ${user.name}`}</div>
                        </h4>
                        <div className={classes.status}>
                            Status: <div className={classes.status__text}>{` ${user.status}`}</div>
                        </div>
                    </div>
                    <div className={classes.location__wrap}>
                        <div className={classes.country}>
                            Country:{/*{` ${props.user.location.country}`}*/}
                        </div>
                        <div className={classes.city}>
                            City:{/*{` ${props.user.location.city}`}*/}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default User