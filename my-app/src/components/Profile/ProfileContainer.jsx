import React from "react";
import classes from "./Profile.module.scss";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";




class ProfileContainer extends React.Component  {

    componentDidMount() {
        let urlProfileId = this.props.match.params.userId
        if (!urlProfileId) {
            urlProfileId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${urlProfileId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        setUserProfile,
    }
    ) (WithUrlProfileContainer);
