import React from "react";
import {Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {sendMessage, updateMessageText} from "./redux/state";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <div className="app-container">
                <Header/>
                <Sidebar state={props.state.sidebar}/>

                <div className="app-wrapper-content">

                    {/*<Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>*/}

                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            sendMessage={props.sendMessage}
                            updateMessageText={props.updateMessageText}

                        />
                    }
                    />

                    <Route path="/profile" render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />
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
