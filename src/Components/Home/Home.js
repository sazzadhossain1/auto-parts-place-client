import React, { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import ExtraSection from "../ExtraSection/ExtraSection";
import Banner from "./Banner";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>

      <h1 className="text-6xl">
        Our All <span className="text-primary">Products</span>{" "}
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 ">
        {allProducts.map((allProduct) => (
          <AllProduct key={allProduct._id} allProduct={allProduct}></AllProduct>
        ))}
      </div>
      <h1 className="mt-20 text-6xl font-bold">Car Spares OEM & Atermarkets</h1>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
