import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="bg-black border-b-2  border-black   shadow-2xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-3xl font-extrabold font-mono text-white">
                 Nidhi Bank
                </span>
              </div>
              <div className=" flex-wrap content-center sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="#"
                  className="text-white decoration-red-700 font-bold font-serif px-3 hover:border-b-2 hover:text border-indigo-500  py-2 rounded-md text-sm "
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-white font-bold font-serif px-3 hover:border-b-2 hover:text border-indigo-500 py-2 rounded-md text-sm"

                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="text-white font-bold font-serif px-3  hover: text-border-b-2 py-2 hover:border-b-2 hover:text border-indigo-500   rounded-md text-sm "
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="text-white font-bold font-serif px-3  hover: text-border-b-2 py-2 hover:border-b-2 hover:text border-indigo-500  rounded-md text-sm "
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/login"
                className="text-white  px-3  hover: text-border-b-2 py-2 rounded-md text-base font-extrabold hover:bg-indigo-700 font-mono"
              >
                Admin login
              </Link>
              <Link
                to="/loginform"
                className="ml-4 px-4 text-base py-2 border border-transparent  font-bold rounded-md text-white bg-black hover:bg-indigo-700  font-mono "
              >
                Agent login
              </Link>
              <Link
                to="/userlogin"
                className="ml-4 px-4 text-base py-2 border border-transparent  font-bold rounded-md text-white bg-black hover:bg-indigo-700  font-mono "
              >
                User login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
