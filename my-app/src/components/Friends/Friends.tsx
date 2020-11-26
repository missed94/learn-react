import React from "react";
import classes from"./Friends.module.scss"
import FriendsItem from "./FriendsItem/FriendsItem";
import {friendsType} from "../../types/types";

type propsType = {
    friends: Array<friendsType>
}


const Friends:React.FC<propsType> = ({friends, }) => {
    const friendsArray = friends.map((friend) => {
        return (<FriendsItem key={friend.id} id={friend.id} friendName={friend.name}/>
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