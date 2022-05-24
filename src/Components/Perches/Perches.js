import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Purchase.css";

const Perches = () => {
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div class="card lg:card-side bg-base-100 shadow-xl style">
      <figure className="ml-10">
        <img src={service.image} alt="" />
      </figure>
      <div class="card-body div-style">
        <h2 class="card-title">Name : {service.name}</h2>
        <h2 class="card-title">
          Short Description : {service.shortDescription}
        </h2>
        <h2 class="card-title">Minimum Quantity : {service.minorderedqty}</h2>
        <h2 class="card-title">
          Avilable Quantity : {service.availableQuantity}
        </h2>
        <h2 class="card-title">Price : {service.Price}</h2>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default Perches;
