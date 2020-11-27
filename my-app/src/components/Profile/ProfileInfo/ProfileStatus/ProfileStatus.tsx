import React, {useEffect, useState} from "react";
import classes from "./ProfileStatus.module.scss"




const ProfileStatus: React.FC<propsType> = ({status, isOwner, updateUserStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setStatus] = useState(status); // деструктуризация массива, useState возвращает массив "[true, () => {}]", пременные editMode и setEditMode присваиваются соответственно

    useEffect(() => { //метод который вызывает переданную в него функцию уже после отрисовки всех компонентов
        setStatus(status)
    }, [status]) // зависимость, useEffect вызывается только тогда, когда меняется props.status

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(localStatus)
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    return (
        <div className={classes.profileStatusComponent}>
            {
                !editMode &&
                <div className={classes.status__wrap}>
                    <span className={isOwner ? classes.authUserStatus : classes.userStatus} onClick={activateEditMode}>{
                        isOwner
                            ? status || "введите статус"
                            : status || null
                    }
                    </span>
                </div>
            }
            {
                editMode &&/* <StatusReduxForm onSubmit={sendStatus} initialValue={status}/>*/
                <form>
                    <input autoFocus onClick={activateEditMode} onChange={onStatusChange} onBlur={deactivateEditMode}
                           value={localStatus}/>
                    <button onClick={deactivateEditMode}>Save</button>
                </form>
            }


        </div>
    )
}
export default ProfileStatus



type propsType = {
    status: string,
    isOwner: boolean,
    updateUserStatus: (status: string) => void,
}