import React from "react";
import {Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <div className="app-container">
                <Header/>
                <Sidebar state={props.state.sidebar}/>

                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>
                    }
                    />

                    <Route path="/profile" render={() =>
                        <Profile/>
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
