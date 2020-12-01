import React from "react";
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import "./App.scss";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersPage from "./components/Users/UsersPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
import Header from "./components/Header/Header";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //ленивая загрузка компоненты
const DialogsWithSuspense = withSuspense(DialogsContainer)


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ProfileWithSuspense = withSuspense(ProfileContainer)

const Login = React.lazy(() => import('./components/Login/Login'));
const LoginWithSuspense = withSuspense(Login)



class App extends React.Component<propsType> {

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
                    <Header/>
                    <Sidebar/>
                    <div className="app-wrapper-content">
                            <Redirect exact from="/" to="/profile" />
                            <Route
                                path="/login"
                                render={() => <LoginWithSuspense/>}
                            />
                            <Route path="/dialogs" render={() => <DialogsWithSuspense/>}
                            />
                            <Route path="/profile/:userId?" render={() => <ProfileWithSuspense/>}
                            />
                            <Route path="/Users" render={() =>
                                <UsersPage/>
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

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type propsType = mapStateToPropsType & mapDispatchToPropsType



let mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {initializeApp}
    ),
    withRouter
)(App)


 let SamuraiJSApp = () => {
   return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp