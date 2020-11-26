import React from "react";
import classes from "./Sidebar.module.scss"
import Navigation from "../Navigation/Navigation";
import Friends from "../Friends/Friends";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {friendsType} from "../../types/types";


type mapStateToPropsType = {
    friends: Array<friendsType>
}

type mapDispatchToPropsType = {}

type propsType = mapStateToPropsType & mapDispatchToPropsType


const Sidebar: React.FC<propsType> = ({friends}) => {
    return (
        <div className={classes.sidebarComponent}>
            <Navigation/>
            <Friends friends={friends}/>
        </div>
    );
};


const mapStateToProps = (state: AppStateType) => ({
    friends: state.sidebar.friends
})


export default connect(
    mapStateToProps,
    {}
)
(Sidebar);