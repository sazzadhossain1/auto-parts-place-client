import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleButton from "../GoogleButton/GoogleButton";
import Loading from "../Loading/Loading";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      alert("Sent Email for Reset Password");
    });
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="input-container">
        <div className="input-filed">
          <p className="loading-logo">{loading && <Loading></Loading>}</p>
          <form onSubmit={handleUserLogin}>
            <h3 className="text-3xl font-medium m-10">
              Please <span className="text-primary text-5xl">Login</span>
            </h3>

            <input
              onBlur={handleEmailBlur}
              className="input-place"
              type="email"
              name=""
              id=""
              placeholder="Email"
              required
            />
            <br />

            <input
              onBlur={handlePasswordBlur}
              className="input-place"
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
            <br />

            <p style={{ color: "red" }}>{error?.message}</p>

            <button className="signUp-button">Login</button>
          </form>

          <p className="login-link m-4 font-bold">
            New to this site?
            <Link to="/signUp">Sign Up</Link>
          </p>

          <p className="font-bold">
            Forget Password?
            <button
              onClick={handleResetPassword}
              className="signUp-button ml-5"
            >
              Reset Password
            </button>
          </p>

          <GoogleButton></GoogleButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
