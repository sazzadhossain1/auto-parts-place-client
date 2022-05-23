import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleButton from "../GoogleButton/GoogleButton";
import Loading from "../Loading/Loading";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Wrong password,Password did not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be 8 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="input-container">
        <div className="input-filed">
          <p className="loading-logo">{loading && <Loading></Loading>}</p>
          <form onSubmit={handleCreateUser}>
            <h3 className="text-3xl font-medium m-10">
              Please <span className="text-primary text-5xl">Sign Up</span>
            </h3>

            <input
              className="input-place"
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              placeholder="Email"
              required
            />
            <br />

            <input
              className="input-place"
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
            <br />
            <input
              className="input-place"
              onBlur={handleConfirmPasswordBlur}
              type="Password"
              name=""
              id=""
              placeholder="Confirm Password"
              required
            />
            <br />
            <p style={{ color: "red" }}>{error}</p>
            <button className="signUp-button">Sign Up</button>
          </form>

          <p className="login-link m-4">
            Already Have an Account?
            <Link to="/login">Login</Link>
          </p>

          <GoogleButton></GoogleButton>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
