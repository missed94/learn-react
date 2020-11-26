import React from "react";
import classes from"./Navigation.module.scss"
import {NavLink} from "react-router-dom";


type propsType = {

}

const Navigation:React.FC<propsType> = (props) => {
  return (
    <nav className={classes.navigationComponent}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to={`/profile/`}>Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/dialogs">Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/users">Users</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/news">News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/music">Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation