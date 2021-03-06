import React from "react";
import classes from "./Profile.module.scss";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getUserStatus,
    savePhoto,
    updateProfileData,
    updateUserStatus
} from "../../redux/reducers/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {profileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<propsType> {

    refreshProfile() {
        let urlProfileId: number | null = +this.props.match.params.userId  //такой сложный путь связан с withRouter
        if (!urlProfileId) {
            urlProfileId = this.props.AuthUserId
        }
        if (!urlProfileId) {
            console.error("ID should exists in URI params or in state (AuthUserId)")
        } else {
            this.props.getProfile(urlProfileId as number)
            this.props.getUserStatus(urlProfileId as number)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: propsType, prevState: AppStateType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div className={classes.profileComponent}>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                    updateProfileData={this.props.updateProfileData}
                />
            </div>
        );
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.userId,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getProfile,
            getUserStatus,
            updateUserStatus,
            savePhoto,
            updateProfileData
        }
    ),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);







type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: profileType | null,
    status: string,
    AuthUserId: number | null
}

type mapDispatchToPropsType = {
    updateUserStatus: (status: string) => void
    savePhoto: (newPhoto: any) => void
    updateProfileData: (profile: profileType) => Promise<any>
    getProfile: (urlProfileId: number) => void,
    getUserStatus: (urlProfileId: number) => void,
}

type propsType = RouteComponentProps<pathParamsType>
    & mapStateToPropsType & mapDispatchToPropsType