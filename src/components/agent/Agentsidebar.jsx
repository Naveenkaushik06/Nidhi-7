import React from "react";
import { Link } from "react-router-dom";

const Agentsidebar = () => {
  return (
    <>
      <div className="fixed font-serif left-0 top-[54px]  z-40 pt-10  w-64 h-screen  transition-transform -translate-x-full bg-white  shadow-xl sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-full  px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className=" space-y-2 text-start  font-medium">
            <li className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
              <div className="flex flex-col ms-2 font-mono  whitespace-nowrap" >
                <span className="font-bold text-lg"> Rajneesh</span>
              
                <span> Agent</span>
              </div>
            </li>
            <li>
              <Link
                to="/agentdashboard"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="flex-1  font-mono font-bold text-lg ms-6 whitespace-nowrap">
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="text-start">
              <Link
                to="/agentdashboard/commission"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group "
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>

                <span className=" flex-1  font-mono font-bold ms-6 text-lg whitespace-nowrap ">
                Commission
                </span>
              </Link>
            </li>

            {/* <li className="text-start">
              <Link
                to="/agentdashboard/loans"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="whitespace-nowrap flex-1  font-mono font-bold ms-6 text-lg">
                  Loans
                </span>
              </Link>
            </li> */}

            {/* <li>
              <Link
                to="/agentdashboard/loancalculator"
                className=" w-full flex items-center px-10 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group "
              >
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                  />
                </svg>

                <span className=" w-full flex-1 pl-4  font-mono font-bold ms-1  text-lg whitespace-nowrap">
                  Loan Calc
                </span>
              </Link>
            </li> */}
{/* 
            <li>
              <Link
                to="/agentdashboard/services"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
                  />
                </svg>

                <span className="flex-1 ms-6   font-mono font-bold text-lg whitespace-nowrap">
                  Services
                </span>
              </Link>
            </li> */}
{/* 
            <li>
              <Link
                to="/agentdashboard/messages"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z"
                  />
                </svg>

                <span className="flex-1  font-mono font-bold  ms-6 text-lg whitespace-nowrap">
                  Messages
                </span>
              </Link>
            </li> */}

            {/* <li>
              <div
                to="/settings/editprofile"
                className="flex items-center  px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>

                <span className="flex-1  font-mono font-bold ms-6 text-lg whitespace-nowrap">
                  Settings
                </span>
              </div>
            </li> */}

          </ul>
        </div>
      </div>
    </>
  );
};

export default Agentsidebar;
