import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googlePhoto from "../../image/google.png";
import "./GoogleButton.css";

const GoogleButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorUser;

  if (error) {
    errorUser = (
      <div>
        <p style={{ color: "red" }}>Error:{error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="parent-line">
        <div className="line"></div>
        <p className="or">or</p>
        <div className="line"></div>
      </div>
      {errorUser}

      {loading && (
        <p>
          Loading...
          <br />
          Please Waite
        </p>
      )}
      <button onClick={() => signInWithGoogle()} className="google">
        <img src={googlePhoto} alt="" /> <p>Countinue With Google</p>
      </button>
    </div>
  );
};

export default GoogleButton;
