import React from "react";

const RegisterhtmlForm = () => {
  return (
    <div>
      <div className="p-8 ml-72 mt-20 rounded border border-gray-200">
        <h1 className="font-mono font-bold text-3xl">Welcome to Nidhi Add Agent Section </h1>

        <form>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="username"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="********"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
               First Name
              </label>
              <input
                type="first-name"
                name="first-name"
                id="first-name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
               last Name
              </label>
              <input
                type="last-name"
                name="last-name"
                id="last-name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="yourmail@gmail.com"
              />
            </div>
            
            <div>
              <label
                htmlFor="number"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="+9134567890"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 font-mono font-bold bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterhtmlForm;
