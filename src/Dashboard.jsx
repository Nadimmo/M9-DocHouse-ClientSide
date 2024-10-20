import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" lg:w-96 min-h-screen p-5 bg-[#F7A582] text-black">
        <ul>
          {/* admin dashboard */}
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink>All User</NavLink>
          </li>
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={"/dashboard/doctor"}>Add Doctors</NavLink>
          </li>
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={'/dashboard/manageDoctor'}>Manage Doctor</NavLink>
          </li>
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {/* divider */}
          <div className="divider">OR</div>
          {/* user dashboard */}
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={'/dashboard/review'}>Add Review</NavLink>
          </li>
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={'/dashboard/appointment'}>My Appointment</NavLink>
          </li>
          <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
            <NavLink to={"/"}>Home</NavLink>
          </li>



        </ul>
      </div>
      {/* outlet */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
