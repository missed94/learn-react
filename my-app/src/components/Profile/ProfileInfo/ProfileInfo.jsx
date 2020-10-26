import React from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";



const ProfileInfo = ({profile, status, updateUserStatus}) => {

    if (!profile) {
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
                {
                    !profile.photos.large
                    ? <img className={classes.avatar} src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
                    : <img className={classes.avatar} src={profile.photos.large} alt=""/>
                }
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                <div>
                    <h4>Name:</h4>
                    {profile.fullName}
                </div>
                <div>
                    <h4>About me:</h4>
                    {profile.aboutMe}
                </div>
                <div>
                    <h4>Contacts:</h4>
                    <ul>
                        <li>{profile.contacts.facebook}</li>
                        <li>{profile.contacts.website}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                        <li>{profile.contacts.youtube}</li>
                        <li>{profile.contacts.github}</li>
                        <li>{profile.contacts.mainLink}</li>
                    </ul>
                </div>
                <div>
                    <h4>Looking for a job: </h4>
                    {profile.lookingForAJob ? <p>{profile.lookingForAJobDescription}</p> : null}
                </div>


            </div>
        </div>
    );
};

export default ProfileInfo;
