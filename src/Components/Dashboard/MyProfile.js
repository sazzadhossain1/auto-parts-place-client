import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const handleAddProfile = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const edu = e.target.edu.value;
    const dist = e.target.dist.value;
    const phone = e.target.phone.value;
    console.log(name, email, edu, dist, phone);
    const profile = {
      name: name,
      email: email,
      edu: edu,
      dist: dist,
      phone: phone,
    };
    const url = "http://localhost:5000/profile";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(profile),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="text-center my-20">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=92310
"
                alt=""
              />
            </div>
          </div>

          <div className="text-left">
            <h1 class="text-3xl font-bold">Name: {user.displayName}</h1>
            <p className="text-2xl">Email:{user?.email}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleAddProfile}>
        <h1 className="text-4xl text-primary text-center my-10">
          Add New Profile
        </h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          class="input my-5 input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          class="input mb-5 input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="number"
          name="phone"
          class="input mb-5 input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="address"
          name="dist"
          class="input mb-5 input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Education"
          name="edu"
          class="input mb-5 input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br />
        <input type="submit" value="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default MyProfile;
