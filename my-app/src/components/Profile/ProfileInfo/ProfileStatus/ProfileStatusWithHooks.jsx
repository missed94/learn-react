import React, {useState} from "react";
import classes from "./ProfileStatus.module.scss"
import StatusReduxForm from "./StatusForm/StatusForm";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status); // деструктуризация массива, useState возвращает массив "[true, () => {}]", пременные editMode и setEditMode присваиваются соответственно

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }


    return (
        <div className={classes.profileStatusComponent}>


            {
                !editMode &&
                <div className={classes.status__wrap}>
                    <span onClick={activateEditMode}>{props.status || "введите статус"}</span>
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

export default ProfileStatusWithHooks