import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import "./Purchase.css";

const Perches = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [service, setService] = useState({});
  const email = user?.email;

  useEffect(() => {
    const url = `https://young-cove-44857.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const purchaseHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    console.log(email);
    const number = event.target.number.value;
    console.log(number);

    const productTitle = event.target.product.value;

    const quantity = parseInt(event.target.quantity.value);
    console.log(quantity);
    const data = {
      name: name,
      email: email,
      number: number,

      product: productTitle,
      quantity: quantity,
    };

    if (quantity < service.minorderedqty) {
      alert("You cannot order more than the available quantity", {
        id: "created",
      });
    }

    if (quantity > service.availableQuantity) {
      alert("You cannot order more than the available quantity", {
        id: "uncreated",
      });
    } else {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

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
          <form onSubmit={purchaseHandler} className="input-field">
            <div className="input-div">
              <input
                className="input-in"
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                required
              />
              <br />
              <input
                className="input-in"
                name="email"
                type="email"
                placeholder="Your Email Address"
                defaultValue={user?.email}
                readOnly
                required
              />
              <br />

              <br />
              <input
                className="input-in"
                name="number"
                type="number"
                placeholder="Phone Number"
                required
              />
              <br />
              <input
                className="input-in"
                name="product"
                type="text"
                placeholder="product"
                defaultValue={service.name}
                required
              />
              <br />
              <input
                className="input-in"
                name="quantity"
                type="text"
                placeholder="quantity"
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
