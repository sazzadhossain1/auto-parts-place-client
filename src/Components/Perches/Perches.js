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
    <div className="flex justify-center items-center ">
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
        </div>
      </div>

      <div>
        <div className="input-fil p-5">
          <h1 className="text-2xl">Purchase Now</h1>
          <form className="inpur-field">
            <div className="input-div">
              <input
                className="input-in"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
              <br />
              <input
                className="input-in"
                name="address"
                type="text"
                placeholder="Your Email Address"
                required
              />
              <br />
              <input
                className="input-in"
                name="number"
                type="text"
                placeholder="Phone Number"
                required
              />
              <br />
              <input
                className="input-in"
                name="available quantity"
                type="text"
                placeholder="Available quantity"
                required
              />
              <br />
              <input
                className="input-in"
                name="minimum quantity"
                type="text"
                placeholder="Minimum quantity"
                required
              />
              <br />
            </div>
            <button className="btn btn-primary mt-5">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perches;
