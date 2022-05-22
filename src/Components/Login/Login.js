import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";

const Login = () => {
  return (
    <div>
      <div className="input-container">
        <div className="input-filed">
          <form>
            <h3 className="text-3xl font-medium m-10">
              Please <span className="text-primary text-5xl">Login</span>
            </h3>

            <input
              className="input-place"
              type="email"
              name=""
              id=""
              placeholder="Email"
              required
            />
            <br />

            <input
              className="input-place"
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
            <br />

            <button className="signUp-button">Login</button>
          </form>

          <p className="login-link m-4">
            New to this site?
            <Link to="/signUp">Sign Up</Link>
          </p>

          <GoogleButton></GoogleButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
