import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header
                {...this.props}
                login={this.props.login}
                currentId={this.props.id}
                isAuth={this.props.isAuth}
                logout={this.props.logout}
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
    getAuthUserData,
    logout
}) (HeaderContainer);