import React from "react";
import "./Nav.css";
import Select from "./Select";
import Btnred from "./Btnred";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="nav">
        <Select />
        <Link to="/signin">
          <Btnred className="res" name="Sign In" paddingtb="5" paddinglr="15" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
