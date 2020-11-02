import React from "react";
import classes from "./ProfileAvatar.module.scss"
import Upload from "antd/es/upload";
import Button from "antd/es/button";
import { UploadOutlined } from '@ant-design/icons';

const ProfileAvatar = ({profile, isOwner, savePhoto}) => {

    let defaultPhotoUrl = "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"

    const onMainPhotoSelected = (e) => {
        if (e.fileList.length) {
            savePhoto(e.fileList[0].originFileObj)
        }
    }
    /*const onMainPhotoSelected = (e) => {

        debugger
        if (e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }*/




    return (
        <div className={classes.profileAvatarComponent}>
            <div className={classes.avatar__container}>
                <div className={classes.avatar__imgWrapper}>
                    <img className={classes.avatar} src={profile.photos.large || defaultPhotoUrl} alt=""/>
                </div>
                {isOwner && <Upload onChange={onMainPhotoSelected}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>} {/*<input className={classes.addPhoto__btn} onChange={onMainPhotoSelected} type={"file"}/>*/}


            </div>
        </div>
    )
}

export default ProfileAvatar