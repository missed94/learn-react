import React from "react";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import "./App.scss";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //ленивая загрузка компоненты
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
           return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <div className="app-container">
                    <HeaderContainer/>
                    <Sidebar state={this.props.state.sidebar}/>
                    <div className="app-wrapper-content">
                            <Redirect from="/" to="/profile" />

                            <Route
                                path="/login"
                                render={withSuspense(Login)}
                            />
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}
                            />
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}
                            />
                            <Route path="/Users" render={() =>
                                <UsersContainer/>
                            }
                            />
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(
        mapStateToProps,
        {initializeApp}
    ),
    withRouter
)(App)


 let SamuraiJSApp = (props) => {
   return <HashRouter>
        <Provider store={store}>
            <AppContainer
                state={store.getState()}
            />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp