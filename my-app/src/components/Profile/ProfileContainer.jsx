import React from "react";
import classes from "./Profile.module.scss";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";




class ProfileContainer extends React.Component  {

    componentDidMount() {
        let urlProfileId = this.props.match.params.userId  //такой сложный путь связан с withRouter
        if (!urlProfileId) {
            urlProfileId = 2
        }
        debugger
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
    profile: state.profilePage.profile
})

let WithUrlProfileContainer = withRouter(ProfileContainer); // withRouter закидывает в компоненты данные из URL

export default connect(mapStateToProps,
    {
        getProfile,
    }
    ) (WithUrlProfileContainer);
