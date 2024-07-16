import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Logo from "../logo/Logo";
//import Search from "../search/Search";
import styles from "./NavBar.module.css";
import Search from "../search/Search";

function NavBar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" unstable_viewTransition>
        <Logo />
      </Link>
      <Search placeholder={"Search a album of your choice"}/>
      <Button name={"Give Feedback"}/>
    </nav>
  );
}

export default NavBar;
