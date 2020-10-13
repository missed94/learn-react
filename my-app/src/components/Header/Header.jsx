import React from "react";
import classes from "./Header.module.scss"
import {NavLink} from "react-router-dom";

const Header = (props) => {



  return (
    <header className={classes.headerComponent}>
      <img src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-logo-design-on-transparent-background-PNG.png" />
      <div className={classes.login__container}>



          {props.isAuth ? props.login :  <NavLink className={classes.login__link} to={`/login`}> Login
          </NavLink>}



      </div>
    </header>
  );
};


export default Header;