import React from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import "./App.scss";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


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
                        <Route
                            path="/login"
                            render={
                                () => <Login/>
                            }
                        />

                        <Route path="/dialogs" render={() =>
                            <DialogsContainer/>
                        }
                        />

                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>
                        }
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
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer
                state={store.getState()}
            />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp