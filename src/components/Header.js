import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        {/* Display logo using Logo component */}
        <Logo />
      </div>

      <div>
        <ul className={classes.menu}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
