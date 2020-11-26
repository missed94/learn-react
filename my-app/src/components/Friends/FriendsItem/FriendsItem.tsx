import React from "react";
import classes from"./FriendsItem.module.scss"

type propsType = {
    friendName: string
}

const FriendsItem: React.FC<propsType> = ({friendName}) => {
    return (
        <li className={classes.friendsItemComponent}>
            <a href="">
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
                <p>{friendName}</p>
            </a>
        </li>
    );
};

export default FriendsItem