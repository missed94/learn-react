import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="app-container">
                    <Header/>
                    <Navigation/>
                    <div className="app-wrapper-content">

                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                    </div>


                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
