import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../image/notfound.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <div className="notFound-div">
        <img src={notFound} alt="" />
      </div>
      <button className="signUp-button">
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
