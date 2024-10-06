import { Link, NavLink } from "react-router-dom";
import img1 from '../../assets/Group 2.png'

const Header = () => {
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>
          <a href="">Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          <a href="">About</a>
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/appointment"}>
          <a href="">Appointment</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {Links}

            </ul>
          </div>
          <img src={img1} alt="" className="bg-black w-40"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/register'><a className="btn">Login</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
