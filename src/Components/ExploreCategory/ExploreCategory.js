import React from "react";
import "./ExploreCategory.css";
const ExploreCategory = ({ category }) => {
  const { image, name, performance } = category;
  return (
    <div className="category">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={image} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{performance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategory;
