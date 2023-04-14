import React from "react";
import logo from "../../assets/images/logo.svg";
import classes from "./Logo.module.css";
function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logo} className={classes.img} alt="logo"></img>
    </div>
  );
}

export default Logo;
