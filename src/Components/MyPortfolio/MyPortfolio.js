import React from "react";
import "./MyPortfolio.css";
import photo from "../../image/sazzad.jpg";
import photo1 from "../../image/a1.png";
import photo2 from "../../image/a2.png";
import photo3 from "../../image/a3.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="parent">
        {" "}
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="p-10 " src={photo} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Sazzad Hossain</h2>
            <h2 className="card-title">sazzadtomal1@gmail.com</h2>
            <h2 className="card-title text-3xl">
              Junior <span className="text-primary">Web Developer</span>
            </h2>
            <p className="card-title">
              I try to give my best all the time. I try to prove myself.I
              compete with myself
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-5xl mt-10 ">
            My <span className="text-primary">skills</span>
          </h1>
          <div class="divider divide"></div>
        </div>
        <div className="grid  lg:grid-cols-5 md:grid-cols-2 grid-cols-1 img-div">
          <img
            className="img-style "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            className="img-style"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            className="img-style"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <img
            className="img-style"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            alt=""
          />
          <img
            className="img-style"
            src="https://anf.al/assets/blog-images/2021-03-06-tailwindcss-review-by-a-backend-developer/tailwindcss.png"
            alt=""
          />
          <img
            className="img-style"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_wvYYquZrB7FZzZL8_ojkIbVLVhSu23liHBkE0HArRhq-uaOOuevml9R-AQm_kOluuw&usqp=CAU"
            alt=""
          />
          <img
            className="img-style"
            src="https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png"
            alt=""
          />
          <img
            className="img-style"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="img-style"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="img-style"
            src="https://avatars.githubusercontent.com/u/76870092?v=4&s=160"
            alt=""
          />
        </div>
      </div>

      <div className="mb-20">
        <div className="mb-32">
          <h1 className="text-4xl font-bold mb-5">My Projects</h1>
          <h1 className="text-3xl font-bold text-primary">
            Click To Image For View Full Website
          </h1>
        </div>
        <div className="grid max-w-7xl mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div>
            <a href="https://bike-bangladesh.web.app" target="blank">
              <p className="mb-10 text-2xl font-bold text-blue-700 ">
                Project - 1
              </p>
              <img className="projects-photo" src={photo1} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://wedding-photography-c1317.firebaseapp.com/"
              target="blank"
            >
              <p className="mb-10 text-2xl font-bold text-blue-700 ">
                Project - 2
              </p>
              <img className="projects-photo" src={photo3} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://preeminent-froyo-e88516.netlify.app/Home"
              target="blank"
            >
              <p className="mb-10 text-2xl font-bold text-blue-700 ">
                Project - 3
              </p>
              <img className="projects-photo" src={photo2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
