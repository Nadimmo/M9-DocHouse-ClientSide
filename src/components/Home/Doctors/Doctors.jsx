import React from "react";
import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import img1 from '../../../assets/Rectangle 15.png'
import img2 from '../../../assets/Rectangle 16.png'
import img3 from '../../../assets/Rectangle 17.png'

const Doctors = () => {
  return (
    <div className="lg:mx-20">
      <div className="text-center mt-32">
        <h3 className="text-4xl font-bold">Our Expert Doctors</h3>
        <p className="text-sm lg:w-[50%] text-justify lg:text-center mt-4 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 mt-20">
        <div className="card bg-base-100 w-80- shadow-xl my-5">
          <figure>
            <img
              src={img1}
              alt="loading.."
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Kallani Kavi</h2>
            <p className="text-sm opacity-[0.6]">
              BTP - Senior Physiotherapist
            </p>
            <div className="mt-6 opacity-[0.6]">
              <div className="flex justify-between">
                <span>
                  <MdLocationPin></MdLocationPin>
                </span>
                <p className="text-sm ml-2">Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className="flex justify-between mt-2">
                <span>
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="text-sm ml-2">Available On Mon, 22 December</p>
              </div>
              <div className="mt-2 flex">
                <span className="mt-[6px]">
                  <FaDollarSign></FaDollarSign>
                </span>
                <p className="text-lg ml-2 font-bold"> 15</p>

              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-outline w-full mt-5 text-[#F7A582] hover:bg-[#F7A582] hover:border-none ">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80- shadow-xl my-5">
          <figure>
            <img
              src={img2}
              alt="loading.."
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Karyen Anderson</h2>
            <p className="text-sm opacity-[0.6]">
              BTP - Senior Physiotherapist
            </p>
            <div className="mt-6 opacity-[0.6]">
              <div className="flex justify-between">
                <span>
                  <MdLocationPin></MdLocationPin>
                </span>
                <p className="text-sm ml-2">Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className="flex justify-between mt-2">
                <span>
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="text-sm ml-2">Available On Mon, 22 December</p>
              </div>
              <div className="mt-2 flex">
                <span className="mt-[6px]">
                  <FaDollarSign></FaDollarSign>
                </span>
                <p className="text-lg ml-2 font-bold"> 25</p>

              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-outline w-full mt-5 text-[#F7A582] hover:bg-[#F7A582] hover:border-none ">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80- shadow-xl my-5">
          <figure>
            <img
              src={img3}
              alt="loading.."
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kairon Karij</h2>
            <p className="text-sm opacity-[0.6]">
              BTP - Senior Physiotherapist
            </p>
            <div className="mt-6 opacity-[0.6]">
              <div className="flex justify-between">
                <span>
                  <MdLocationPin></MdLocationPin>
                </span>
                <p className="text-sm ml-2">Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className="flex justify-between mt-2">
                <span>
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="text-sm ml-2">Available On Mon, 22 December</p>
              </div>
              <div className="mt-2 flex">
                <span className="mt-[6px]">
                  <FaDollarSign></FaDollarSign>
                </span>
                <p className="text-lg ml-2 font-bold"> 20</p>

              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-outline w-full mt-5 text-[#F7A582] hover:bg-[#F7A582] hover:border-none ">
                View Profile
              </button>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Doctors;
