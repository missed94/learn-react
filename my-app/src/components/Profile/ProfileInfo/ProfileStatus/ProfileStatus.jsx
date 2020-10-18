import React from "react";
import classes from "./ProfileStatus.module.scss"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) { //процесс синхронизации локального стейта с глобальным
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.profileStatusComponent}>
                {!this.state.editMode
                    ? <div className={classes.status__wrap}>
                        <span onClick={this.activateEditMode}>{this.props.status || "введите статус"}</span>
                    </div>
                    : <div>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus