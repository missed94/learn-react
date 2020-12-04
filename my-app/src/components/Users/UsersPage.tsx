import React from "react";
import {useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching,} from "../../redux/selectors/users-selector";


type UsersPagePropsType = {}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    return (
            <Users/>
    );
}

export default UsersPage
