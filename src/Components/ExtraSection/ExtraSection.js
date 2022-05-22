import React from "react";

const ExtraSection = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20">
      <div class="card w-96 bg-base-100 shadow-xl image-full mt-16 mx-auto">
        <figure>
          <img
            src="https://wp.brator.xyz/wp-content/uploads/2021/12/hot-3.png"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">Keep things running smoothly</h2>
          <p className="text-3xl text-blue-700"> BEST CHOICE</p>
          <p>Sport Gas Shock </p>
          <p>Absorers</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl image-full mt-16 mx-auto">
        <figure>
          <img
            src="https://wp.brator.xyz/wp-content/uploads/2021/12/hot-1.png"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-xl">Keep things running smoothly</h2>
          <p className="text-5xl ">
            Helix <span className="text-black">Engine</span> Oils
          </p>
          <p>
            Sport Gas Shock <p>Absorers</p>
          </p>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl image-full mt-16 mx-auto">
        <figure>
          <img
            src="https://wp.brator.xyz/wp-content/uploads/2021/12/hot-2.png"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">
            <span className="font-bold text-black">Dunlon</span> Tires & Wheels
          </h2>
          <p className="text-5xl text-primary">35% OFF</p>
          <p>Sport Gas Shock </p>
          <p>Absorers</p>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl image-full mt-16 mx-auto">
        <figure>
          <img
            src="https://wp.brator.xyz/wp-content/uploads/2021/12/hot-4.png"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-5xl">SUPER SAVER</h2>
          <p className="text-3xl text-primary">
            <span className="text-blue-900 font-bold">Sale up to 70%</span>{" "}
            <span className="text-black font-bold">
              for over 8,000 products
            </span>
          </p>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
