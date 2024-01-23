import React from "react";
import Btnred from "./Btnred";
import "./Home.css";

function Email() {
  return (
    <div className="contact">
      <input
        className="email-form form-mar"
        placeholder="Email address"
        type="email"
      />
      <Btnred
        className="form-mar"
        name="Get Started >"
        paddingtb="10"
        paddinglr="14"
        fsize="17"
      />
    </div>
  );
}

export default Email;
