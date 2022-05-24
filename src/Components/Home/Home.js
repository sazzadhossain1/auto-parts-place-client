import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";
import ExploreCategory from "../ExploreCategory/ExploreCategory";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import Review from "../Review/Review";
import Star from "../Star/Star";
import Banner from "./Banner";
import "./Home.css";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  const navigate = useNavigate();
  const goToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategorys(data);
      });
  }, []);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>

      <h1 className="text-6xl">
        Our All <span className="text-primary">Products</span>{" "}
      </h1>

      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto
 "
      >
        {allProducts.map((allProduct) => (
          <AllProduct
            key={allProduct._id}
            allProduct={allProduct}
            goToPurchase={goToPurchase}
          ></AllProduct>
        ))}
      </div>

      <h1 className="mt-40 text-5xl font-bold">
        <span className="text-blue-700">Featured </span> &{" "}
        <span className="text-primary">Brands</span>
      </h1>

      <div className="mt-40 ">
        <ExtraSectionTwo></ExtraSectionTwo>
      </div>
      <h1 className="mt-40 text-6xl font-bold">Car Spares OEM & Atermarkets</h1>
      <div className="">
        <ExtraSection></ExtraSection>
      </div>
      <div>
        <h1 className="text-4xl mt-40 m-10">
          Explore <span className="text-primary">by</span> Category
        </h1>
        <div className=" grid px-32  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {categorys.map((category) => (
            <ExploreCategory
              key={category._id}
              category={category}
            ></ExploreCategory>
          ))}
        </div>
      </div>
      <div className="m-40">
        <h1 className="text-4xl m-10 font-bold">
          Our <span className="text-primary">Acquisition</span>
        </h1>

        <div className="blank"></div>
        <Star></Star>
      </div>
      <div>
        <Review reviews={reviews}></Review>
      </div>
    </div>
  );
};

export default Home;
