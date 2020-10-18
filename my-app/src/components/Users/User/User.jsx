import React from "react";
import classes from "./User.module.scss";
import {NavLink} from "react-router-dom";



const User = (props) => {


    let onFollow = () => {
        props.getFollow(props.user.id)
    }
    let onUnfollow = () => {
        props.getUnfollow(props.user.id)

    }


    return (
        <li className={classes.userComponent}>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <div className={classes.img_wrap}>
                        <NavLink to={`/profile/${props.user.id}`}>
                            <img src={props.user.photos.small != null
                                ? props.user.photos.small
                                : "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}
                                 alt="user"
                            />
                        </NavLink>

                    </div>
                    {props.user.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)} //если хоть одна id из массива равна id пользлвателя при нажатии то ее и disabl'и
                            className={classes.button} onClick={onUnfollow}> unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  className={classes.button} onClick={onFollow}> follow </button>
                    }

                </div>
                <div className={classes.desc}>
                    <div className={classes.nameStatus}>
                        <h4 className={classes.fullName}>
                            Name: <div>{` ${props.user.name}`}</div>
                        </h4>
                        <div className={classes.status}>
                            Status: <div className={classes.status__text}>{` ${props.user.status}`}</div>
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