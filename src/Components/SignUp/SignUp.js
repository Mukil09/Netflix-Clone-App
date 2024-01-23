import React from "react";
import "./SignUp.css";
import Footer from "../Footer.js";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="SignUp">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="SignUp-container">
          <div className="Container">
            <h1>Sign In</h1>
            <div className="SignUp-form">
              <input type="text" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>

              <div className="TermsOfService">
                <div className="TOS-1">
                  <input type="checkbox" />
                  <h4>Remember me</h4>
                </div>
                <div className="TOS-2">
                  <h4>Need help?</h4>
                </div>
              </div>
            </div>

            <div className="New-user">
              <h3>
                New to Netflix?{" "}
                <Link to="/">
                  <span>Sign up now.</span>
                </Link>
              </h3>
              <h4>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span>Learn more.</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
