import React from "react";
import classes from "./User.module.scss";
import {NavLink} from "react-router-dom";


const User = (props) => {


    let onFollow = () => {
        let userId = props.user.id
        props.follow(userId)
    }
    let onUnfollow = () => {
        let userId = props.user.id
        props.unfollow(userId)
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
                        ? <button className={classes.button} onClick={onUnfollow}> unfollow </button>
                        : <button className={classes.button} onClick={onFollow}> follow </button>
                    }

                </div>
                <div className={classes.desc}>
                    <div className={classes.nameStatus}>
                        <h4 className={classes.fullName}>
                            Name:{` ${props.user.name}`}
                        </h4>
                        <p className={classes.status}>
                            Status:{` ${props.user.status}`}
                        </p>
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