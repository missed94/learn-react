import React from "react";
import classes from"./Navigation.module.scss"


const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={classes.link} href="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">News</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">Music</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation