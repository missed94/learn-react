import React from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfoComponent}>
            <div className={classes.banner__wrap}>
                <img
                    className={classes.banner}
                    src="https://s3.nat-geo.ru/images/2019/6/23/2054642dfdd241c99fc32579ab7e1c61.max-1200x800.jpg"
                />
            </div>
            <div className={classes.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
