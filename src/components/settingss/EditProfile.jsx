import React from "react";

const EditProfile = () => {
  return (
    <> 
      <div className="w-auto container font-mono ml-56 p-2 bg-white rounded-xl flex ">
        <div className=" mx-5 mt-8 p-2">
          <button
            type="button"
            className="flex text-md bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <img
              className="w-24 h-24 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>

        <div className="w-3/4 mt-10">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="yourname"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Date"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="Date"
                  id="Date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="dd/mm/yy"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Present address
                </label>
                <input
                  type="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xyz pincode"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Permanent address
                </label>
                <input
                  type="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" permanent address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="city"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="postal_code"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Postal Code
                </label>
                <input
                  type="postal_code"
                  id="postal_code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="120044"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="postal_code"
                  className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="country"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="claiphorniya"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-end ">
              <button
                type="submit"
                className="text-white bg-violet-800 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md w-full sm:w-auto px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
