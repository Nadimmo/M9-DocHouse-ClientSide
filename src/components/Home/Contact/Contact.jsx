import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="lg:mx-20 my-20 bg-[#07332F] text-white p-10 rounded-xl lg:flex justify-between">
      <div className="mt-10">
        <h3 className="text-4xl font-bold">Contact With Us</h3>
        <p className="text-sm lg:w-[400px] py-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>

        <div className="flex ">
          <span>
            <FaPhone></FaPhone>
          </span>
          <p className="text-sm ml-2">+88 01750 14 14 14</p>
        </div>
        <div className="flex ">
          <span>
            <MdLocationPin></MdLocationPin>
          </span>
          <p className="text-sm ml-2">Dhanmondi, Dhaka, Bangladesh</p>
        </div>
      </div>
      {/* contact from */}
      <div>
        <div className="lg:flex justify-around">
          <div>
            <form action="">
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="text" className="grow" placeholder="Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="text" className="grow" placeholder="Mobile" />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="date" className="grow" placeholder="Date" />
              </label>
            </form>
          </div>
          {/* second part */}
          <div className="lg:ml-5">
            <form action="">
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="text" className="grow" placeholder="Doctor Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-4">
                <input type="time" className="grow" placeholder="Time" />
              </label>
            </form>
          </div>
        </div>
        <button className="w-full mt-4 btn btn-outline text-[#F7A582] hover:bg-[#F7A582] hover:border-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
