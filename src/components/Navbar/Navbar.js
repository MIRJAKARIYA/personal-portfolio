import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black sticky top-0 z-20">
      <div className="navbar max-w-[1400px] mx-auto">
        <div className="navbar-start text-white">
          <div className="dropdown lg:hidden">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
              <a href="#home" className="mr-7">
              Home
            </a>
              </li>
              <li>
                <a href="#about" className="mr-7">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="mr-7">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contactme" className="mr-7">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold btn btn-ghost">Mir Jakariya</h1>
        </div>
        <div className="navbar-end hidden lg:block">
          <div className="flex justify-end text-white font-semibold">
            <a href="#home" className="mr-7 hover:text-warning">
              Home
            </a>
            <a href="#about" className="mr-7 hover:text-warning">
              About
            </a>
            <a href="#projects" className="mr-7 hover:text-warning">
              Projects
            </a>
            <a href="#contactme" className="mr-7 hover:text-warning">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
