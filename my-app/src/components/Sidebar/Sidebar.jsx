import React from "react";
import classes from"./Sidebar.module.scss"
import Navigation from "../Navigation/Navigation";
import Friends from "../Friends/Friends";
import NavigationContainer from "../Navigation/NavigationContainer";

const Sidebar = (props) => {
    return (
        <div className={classes.sidebarComponent}>
            <Navigation/>
            <Friends state={props.state.friends}/>
        </div>
    );
};

export default Sidebar