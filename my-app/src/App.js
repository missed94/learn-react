import React from "react";
import {Route} from "react-router-dom";
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


const App = (props) => {
    return (

        <div className="app-wrapper">
            <div className="app-container">
                <HeaderContainer/>
                <Sidebar state={props.state.sidebar}/>

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
};

export default App;
