import React from "react";

const Preferences = () => {
  return (
    <>
      <div className="mt-6 ml-72 bg-white font-mono mx-5 p-2 pb-5">
        <span className=" font-bold text-xl mt-5">
          Two-factor Authentication
        </span>
        <div className="mt-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-md  text-gray-900 dark:text-gray-300">
              Enable or disable two factor authentication
            </span>
          </label>
        </div>

        <div className="mt-3">
          <div className=" text-xl mb-2 font-bold">
           
            <span> Change Password</span>
          </div>
          <label
            htmlFor=" current_password"
            className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
          >
            Current Password
          </label>
          <input
            type="current_password"
            id=" current_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="new_password"
            className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
          >
            New Password
          </label>
          <input
            type="new_password"
            id="new_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className=" flex justify-end mr-10 ">
        <button
            type="submit"
            className="text-white bg-violet-800 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md w-full sm:w-auto px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Preferences;
