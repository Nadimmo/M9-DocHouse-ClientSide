import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../../assets/Ellipse 2.png";
import img2 from "../../../assets/Ellipse 2 (1).png";
import img3 from "../../../assets/Group 17.png";

const Review = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <div className="text-center mt-20">
        <h3 className="text-4xl font-bold">What Our Patients Says</h3>
        <p className="text-sm lg:w-[50%] text-justify lg:text-center mt-4 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="mt-5 my-10">
        <Swiper
          slidesPerView={1} // Default for larger screens
          centeredSlides={true}
          spaceBetween={30}
          className="mySwiper w-[100%] lg:w-[80%]"
        >
          <SwiperSlide className="rounded-xl border-2 p-4">
            <div className="">
              <div className="lg:flex justify-between">
                <div className="lg:flex">
                  <img src={img1} alt="" className="mx-auto"/>
                  <div className="ml-5 text-center lg:text-left">
                    <h3 className="text-lg  font-bold">Abdullah </h3>
                    <span className="text-sm ">Product Manager</span>
                  </div>
                </div>
                <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm mt-4 opacity-[.7] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                iste, laudantium velit itaque saepe eos nesciunt quibusdam
                doloremque temporibus minus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl border-2 p-4 ">
            <div className="">
              <div className="lg:flex justify-between">
                <div className="lg:flex">
                  <img src={img2} alt="" className="mx-auto"/>
                  <div className="ml-5 text-center lg:text-left">
                    <h3 className="text-lg font-bold">Lax Lady </h3>
                    <span className="text-sm">Accounting Manager</span>
                  </div>
                </div>
                <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm mt-4 opacity-[.7] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                iste, laudantium velit itaque saepe eos nesciunt quibusdam
                doloremque temporibus minus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl border-2 p-4 ">
            <div>
              <div className="lg:flex justify-between">
                <div className="lg:flex">
                  <img src={img1} alt="" className="mx-auto"/>
                  <div className="ml-5 text-center lg:text-left">
                    <h3 className="text-lg font-bold">Muhammad Abdullah </h3>
                    <span className="text-sm">Product Manager</span>
                  </div>
                </div>
                <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm mt-4 opacity-[.7] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                iste, laudantium velit itaque saepe eos nesciunt quibusdam
                doloremque temporibus minus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl border-2 p-4 ">
            <div>
              <div className="lg:flex justify-between">
                <div className="lg:flex">
                  <img src={img2} alt="" className="mx-auto"/>
                  <div className="ml-5 text-center lg:text-left">
                    <h3 className="text-lg font-bold">Stacks Lady </h3>
                    <span className="text-sm">Product Manager</span>
                  </div>
                </div>
                <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm mt-4 opacity-[.7] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                iste, laudantium velit itaque saepe eos nesciunt quibusdam
                doloremque temporibus minus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl border-2 p-4 ">
            <div>
              <div className="lg:flex justify-between">
                <div className="lg:flex">
                  <img src={img1} alt="" className="mx-auto" />
                  <div className="ml-5 text-center lg:text-left">
                    <h3 className="text-lg font-bold">Muhammad Abdullah </h3>
                    <span className="text-sm">Product Manager</span>
                  </div>
                </div>
                <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm mt-4 opacity-[.7] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                iste, laudantium velit itaque saepe eos nesciunt quibusdam
                doloremque temporibus minus.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
