import React from "react";
import classes from "./ProfileAvatar.module.scss"
import Upload, {UploadChangeParam} from "antd/es/upload";
import Button from "antd/es/button";
import {UploadOutlined} from '@ant-design/icons';
import {profileType} from "../../../../types/types";


const ProfileAvatar: React.FC<PropsType> = ({profile, isOwner, savePhoto}) => {

    let defaultPhotoUrl = "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"

    const onMainPhotoSelected = (e: UploadChangeParam) => {
        if (e.fileList?.length) {
            savePhoto(e.fileList[e.fileList.length - 1].originFileObj)
        }
    }
    return (
        <div className={classes.profileAvatarComponent}>
            <div className={classes.avatar__container}>
                <div className={classes.avatar__imgWrapper}>
                    <img className={classes.avatar} src={profile.photos.large || defaultPhotoUrl} alt=""/>
                </div>
                {isOwner && <Upload showUploadList={false} onChange={onMainPhotoSelected}>
                    <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                </Upload>}
            </div>
        </div>
    )
}

export default ProfileAvatar




type PropsType = {
    profile: profileType,
    isOwner: boolean,
    savePhoto: (newPhoto: any) => void
}
