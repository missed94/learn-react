import React, {FC, ReactDOM, useEffect, useState} from "react";
import classes from "./ProfileStatus.module.scss"


type propsType = {
    status: string,
    isOwner: boolean,
    updateUserStatus: (status: string) => void,
}

const ProfileStatus: FC<propsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status); // деструктуризация массива, useState возвращает массив "[true, () => {}]", пременные editMode и setEditMode присваиваются соответственно

    useEffect( () => { //метод который вызывает переданную в него функцию уже после отрисовки всех компонентов
        setStatus(props.status)
    }, [props.status]) // зависимость, useEffect вызывается только тогда, когда меняется props.status

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    return (
        <div className={classes.profileStatusComponent}>
            {
                !editMode &&
                <div className={classes.status__wrap}>
                    <span className={props.isOwner ? classes.authUserStatus : classes.userStatus} onClick={activateEditMode}>{
                        props.isOwner
                            ? props.status || "введите статус"
                            : props.status || null
                    }
                    </span>
                </div>
            }
            {
                editMode &&/* <StatusReduxForm onSubmit={sendStatus} defaultValue={status}/>*/
            <form>
                <input autoFocus onClick={activateEditMode} onChange={onStatusChange} onBlur={deactivateEditMode}
                       value={status}/>
                <button onClick={deactivateEditMode}>Save</button>
            </form>
            }


        </div>
    )
}

export default ProfileStatus