import React from "react";
import img from "../../assets/Frame.png";
import "./style.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="my-5">
      <div className="hero back rounded-2xl min-h-screen p-6">
        <div className="hero-content rounded-xl bg-white flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} alt="" className="back rounded-xl" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <h1 className="text-center text-2xl lg:text-5xl font-bold">
                Sign up now!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#F7A582]">
                  Create Account
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="grid grid-cols-3 hover:cursor-pointer text-4xl gap-x-10 mx-auto">
                   <FaGoogle></FaGoogle>
                   <FaFacebook></FaFacebook>
                   <FaGithub></FaGithub>
              </div>
              <p className="text-sm py-2 font-bold">
                Already registered? Go to{" "}
                <Link to={"/login"}>
                  <span className="text-[#F7A582]">SIGN IN</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
