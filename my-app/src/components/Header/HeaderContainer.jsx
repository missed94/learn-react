import React from "react";
import classes from "./Header.module.scss"
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


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
    getAuthUserData
}) (HeaderContainer);