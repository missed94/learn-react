import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <div className="app-container">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Dialogs/>
                    {/*<Profile/>*/}
                </div>


            </div>
        </div>
    );
};

export default App;
