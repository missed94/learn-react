import React from "react";
import classes from "./Header.module.scss"
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserProfile} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {
            withCredentials: true //для того чтоб отправить с собой authorization cookie
        })
            .then(response => {
                if (response.data.resultCode === 0)

                {
                    let {id, email, login} = response.data.data

                    this.props.setAuthUserData(id, email, login)

                }
            })
    }

    render() {
        return (
            <Header
                {...this.props}
                login={this.props.login}
                currentId={this.props.id}
                isAuth={this.props.isAuth}
            />
        );
    }

}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    currentId: state.auth.id,
})


export default connect(mapStateToProps, {
    setAuthUserData,
}) (HeaderContainer);