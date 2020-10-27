import React from "react";
import classes from "./ProfileStatus.module.scss"
import StatusReduxForm from "./StatusForm/StatusForm";

class ProfileStatus2 extends React.Component {

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
    }

    componentDidUpdate(prevProps, prevState) { //процесс синхронизации локального стейта с глобальным
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    sendStatus = (values) => {
        this.props.updateUserStatus(values.status)
        this.deactivateEditMode()
    }

    render() {
        return (
            <div className={classes.profileStatusComponent}>
                {!this.state.editMode
                    ? <div className={classes.status__wrap}>
                        <span onClick={this.activateEditMode}>{this.props.status || "введите статус"}</span>
                    </div>
                    : <StatusReduxForm onSubmit={this.sendStatus} deactivateEditMode={this.deactivateEditMode}/>/*<form>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </form>*/
                }
            </div>
        )
    }
}

export default ProfileStatus2