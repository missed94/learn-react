import React from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profileInfoComponent}>
            <div className={classes.banner__wrap}>
                <img
                    className={classes.banner}
                    src="https://s3.nat-geo.ru/images/2019/6/23/2054642dfdd241c99fc32579ab7e1c61.max-1200x800.jpg"
                />
            </div>
            <div className={classes.description}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>
                    <h4>Name:</h4>
                    {props.profile.fullName}
                </div>
                <div>
                    <h4>About me:</h4>
                    {props.profile.aboutMe}
                </div>
                <div>
                    <h4>Contacts:</h4>
                    <ul>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.website}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                        <li>{props.profile.contacts.youtube}</li>
                        <li>{props.profile.contacts.github}</li>
                        <li>{props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
                <div>
                    <h4>Looking for a job: </h4>
                    {props.profile.lookingForAJob ? <p>{props.profile.lookingForAJobDescription}</p> : null}
                </div>


            </div>
        </div>
    );
};

export default ProfileInfo;
