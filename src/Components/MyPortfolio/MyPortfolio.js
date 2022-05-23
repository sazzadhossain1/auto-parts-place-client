import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="parent">
      <div className="m-40">
        <h1 className="text-3xl ">Name : Sazzad Hossain Tomal</h1>
        <h1 className="text-2xl my-5">Email : sazzadtomal1@gmail.com</h1>
        <h1 className="text-3xl ">
          Educational Background : Running B.B.A from Student
          <span className="text-primary">
            Victoria University of Bangladesh
          </span>
        </h1>
        <div className="m-10">
          <p className="text-xl ">Skills</p>
          <div>
            <li className="text-xl ">Html</li>
            <li className="text-xl ">Css</li>
            <li className="text-xl ">Bootstrap</li>
            <li className="text-xl ">Tailwind css</li>
            <li className="text-xl ">JavaScript</li>
            <li className="text-xl ">ReactJs</li>
            <li className="text-xl ">NodeJs</li>
          </div>
        </div>
        <div>
          <h1>My Projects : Well Food</h1>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
