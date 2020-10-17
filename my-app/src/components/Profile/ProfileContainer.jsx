import React from "react";
import classes from "./Profile.module.scss";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let urlProfileId = this.props.match.params.userId  //такой сложный путь связан с withRouter
        if (!urlProfileId) {
            urlProfileId = 2
        }
        this.props.getProfile(urlProfileId)
    }

    render() {

        return (
            <div className={classes.profileComponent}>
                <Profile
                    {...this.props}
                    profile={this.props.profile}/>
            </div>
        );
    }

};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps,
        {
            getProfile,
        }
    ),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)