import React from "react";

const AgentCommission = () => {
  return (
    <>
      <div className=" w-[60rem] relative font-mono ml-72 top-40 overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center font-extrabold text-lg">
              <th scope="col" className="px-3 text-start  py-3">
                 Name
              </th>
              <th scope="col" className="px-3   py-3">
                Type
              </th>
              <th scope="col" className="px-3   py-3">
                Commission %
              </th>
              <th scope="col" className="px-3   py-3">
               Date
              </th>
              <th scope="col" className="px-3  py-3">
               Commission Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b text-center  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-3 py-4 font-semibold text-start text-md text-gray-900 whitespace-nowrap dark:text-white"
              >
                Aman
              </th>
              <td className="px-3 text-md font-bold py-4">Fd</td>
              <td className="px-3 text-md font-bold py-4">5%</td>
              <td className="px-3 text-md font-bold py-4">12/04/2024</td>
              <td className="px-3 text-md font-bold py-4">120</td>
            </tr>
            <tr className="bg-gray-100 border-b text-center  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-3 py-4 font-semibold text-start text-md text-gray-900 whitespace-nowrap dark:text-white"
              >
                Rajneesh
              </th>
              <td className="px-3 text-md font-bold py-4">Fd</td>
              <td className="px-3 text-md font-bold py-4">5%</td>
              <td className="px-3 text-md font-bold py-4">12/04/2024</td>
              <td className="px-3 text-md font-bold py-4">120</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AgentCommission;
