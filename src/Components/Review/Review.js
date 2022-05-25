import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Review = ({ reviews }) => {
  return (
    <div
      className="max-w-7xl mx-auto
    "
    >
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <div className="">
                <div class="card bg-base-100 shadow-xl">
                  <div class="avatar online">
                    <div class="w-24 rounded-full">
                      <img
                        src="https://wp.brator.xyz/wp-content/uploads/2021/10/review-01.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.comments}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Review;
