import React from "react";
import classes from"./Friends.module.scss"
import FriendsItem from "./FriendsItem/FriendsItem";




const Friends = (props) => {
    const friendsArray = props.state.map((friend, i) => {
        return (<FriendsItem key={i} id={friend.id} friendName={friend.name}/>
        )
    })

    return (
        <div className={classes.friendsComponent}>
            <h3>Friends</h3>
            <ul className={classes.friendsList}>
                {friendsArray}
            </ul>
        </div>
    );
};

export default Friends