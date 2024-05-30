import React from "react";

const Security = () => {
  return (
    <> 
 
    <div className="ml-72 font-mono p-2 rounded-lg bg-white mx-5">
      <div className="flex mx-5 mt-5">
        <div className="w-full">
          <label
            htmlFor="new_password"
            className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
          >
            Currency
          </label>
          <input
            type="currency"
            id="currency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="USD"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="time"
            className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
          >
            Time Zone
          </label>
          <input
            type="time"
            id="time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="USD"
            required
          />
        </div>
      </div>
      <div className=" font-mono text-lg font-bold mx-5 mt-5">
        <span> Notification</span>
      </div>
      <div className="  font-mono font-bold mx-5 mt-5">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-md  text-gray-900 dark:text-gray-300">
            I send or receive digital currency
          </span>
        </label>
      </div>
      <div className=" font-mono font-bold mx-5 mt-5">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 font-mono font-bold text-gray-900 dark:text-gray-300">
            I receive merchant order
          </span>
        </label>
      </div>
      <div className=" font-mono font-bold mx-5 mt-5">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 font-mono font-bold text-gray-900 dark:text-gray-300">
            There are recommendation for my account
          </span>
        </label>
      </div>
      <div className=" flex justify-end ">
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

export default Security;