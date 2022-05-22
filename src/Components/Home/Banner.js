import React from "react";
import bannerPhoto from "../../image/banner/banner-img-1.png";
import bannerPhoto1 from "../../image/banner/banner-img-2.png";
import bannerPhoto2 from "../../image/banner/bestsell-thumb.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide2" className="carousel-item relative    w-full">
        <div className="flex justify-around  items-center w-[100%]">
          <div className="">
            <p className="text-6xl text-sky-700">New Top Product</p>
            <p className="text-6xl">
              High <small className="text-primary">Quality</small>
            </p>
            <br />
            <p className="text-3xl">
              Excepteur sint occaecat cupidatat non proident
            </p>

            <p className="text-3xl">sunt in culpa qui officia.</p>
          </div>

          <img
            src={bannerPhoto}
            className="w-[35%] flex justify-between "
            alt=""
          />
        </div>

        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>

          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" class="carousel-item relative w-full">
        <div className="flex justify-around  items-center w-[100%]">
          <div className="">
            <p className="text-6xl text-sky-700">New Top Product</p>
            <p className="text-6xl">
              High <small className="text-primary">Quality</small>
            </p>
            <br />
            <p className="text-3xl">
              Excepteur sint occaecat cupidatat non proident
            </p>

            <p className="text-3xl">sunt in culpa qui officia.</p>
          </div>

          <img
            src={bannerPhoto1}
            className="w-[35%] flex justify-between "
            alt=""
          />
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <div className="flex justify-around  items-center w-[100%]">
          <div className="">
            <p className="text-6xl text-sky-700">New Top Product</p>
            <p className="text-6xl">
              High <small className="text-primary">Quality</small>
            </p>
            <br />
            <p className="text-3xl">
              Excepteur sint occaecat cupidatat non proident
            </p>

            <p className="text-3xl">sunt in culpa qui officia.</p>
          </div>

          <img
            src={bannerPhoto2}
            className="w-[35%] flex justify-between "
            alt=""
          />
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
