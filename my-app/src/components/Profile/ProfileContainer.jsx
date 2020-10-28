import React from "react";
import classes from "./Profile.module.scss";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let urlProfileId = this.props.match.params.userId  //такой сложный путь связан с withRouter
        if (!urlProfileId) {
            urlProfileId = this.props.AuthUserId
        }
        this.props.getProfile(urlProfileId)
        this.props.getUserStatus(urlProfileId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div className={classes.profileComponent}>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }

};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.userId,
})


export default compose(
    connect(mapStateToProps,
        {
            getProfile,
            getUserStatus,
            updateUserStatus,
            savePhoto
        }
    ),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)