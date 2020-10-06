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
import {sendMessage, updateMessageText} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                        <DialogsContainer
                            /*dispatch={props.dispatch}
                            dialogsPage={props.state.dialogsPage}*/
                            store={props.store}

                        />
                    }
                    />

                    <Route path="/profile" render={() =>
                        <Profile
                            /*profilePage={props.state.profilePage}
                            dispatch={props.dispatch}*/
                            store={props.store}
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
