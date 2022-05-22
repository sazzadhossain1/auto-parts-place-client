import React from "react";

const AllProduct = ({ allProduct }) => {
  const {
    _id,
    image,
    name,
    Price,
    shortDescription,
    minorderedqty,
    availableQuantity,
  } = allProduct;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <p>Min-Qty - {minorderedqty}</p>
        <p>Available Qun - {availableQuantity}</p>
        <p>Price - {Price}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
