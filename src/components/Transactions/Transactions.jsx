import React, { useState } from "react";
import Example from "./TransactionsData";

const Transaction = () => {

  const maskAccountNumber = (accountNumber) => {
    if (accountNumber.length === 11) {
      const firstFourDigits = accountNumber.substring(0, 4);
      const maskedDigits = accountNumber.substring(4).replace(/\d/g, "*");
      return firstFourDigits + maskedDigits;
    } else {
      return accountNumber;
    }
  };

  const [loanData] = useState(Example);

  return (
    <>
      <div style={{ height: "100vh", background: "lightgrey" }}>
        <div className=" p-8 mt-20 h-auto sm:ml-64">
          <div className=" absolute top-24 left-56 mb-1">
            <span className="text-xl font-bold font-mono ">
              Transaction History
            </span>
          </div>
          <div className=" absolute top-36 left-64 mb-1">
            <span className="text-sm text-blue-700  font-mono">
              All Transactions
            </span>
          </div>
          <div className=" absolute right-3 items-center flex justify-center top-24 bg-indigo-400 w-72 h-12 rounded-3xl">
            <div className="bg-slate-300 h-8 content-center rounded-lg flex align-middle justify-around">
              <button className=" text-black font-bold font-mono w-24 rounded-lg hover:bg-violet-700 ">
                Monthly
              </button>
              <button className=" text-black font-bold font-mono w-24 rounded-lg hover:bg-violet-700 ">
                Weekly
              </button>
              <button className=" text-black font-bold font-mono w-24 rounded-lg hover:bg-violet-700">
                Today
              </button>
            </div>
          </div>
          <div className="absolute left-56 w-4/5 mt-5 top-44 p-2 shadow-md sm:rounded-lg">
            <table className=" w-full text-sm text-center rounded-lg   text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-slate-50  dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-2">
                    <div className="flex items-center">
                      <span className=" font-bold font-mono text-base whitespace-nowrap text-gray-400">
                        Bank Name
                      </span>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono  text-base font-bold text-gray-400 whitespace-nowrap dark:text-white"
                  >
                    Transaction ID
                  </th>
                  <td className="px-6 py-4 text-base font-mono  font-bold text-gray-400 whitespace-nowrap dark:text-white">
                    Amount
                  </td>
                  <td className="px-6 py-4 font-mono   text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                    Account Number
                  </td>
                  <td className="px-6 py-4 font-mono   text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                    Date
                  </td>
                  <td className="px-6 py-4 text-base font-mono  font-bold text-gray-400 whitespace-nowrap dark:text-white">
                    Status
                  </td>
                  <td className="text-base font-bold font-mono  py-3  text-gray-400 whitespace-nowrap dark:text-white">
                    Receipt
                  </td>
                </tr>
              </thead>
              <tbody>
                {loanData.map((loan) => (
                  <tr
                    key={loan.id}
                    className="bg-white  text dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <span className="  flex-wrap font-bold text-black whitespace-nowrap ">
                          {loan.Bank}
                        </span>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="py-3  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {loan.TransactionID}
                    </th>
                    <td className=" py-3  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                      {loan.Amount}
                    </td>
                    <td className=" py-3  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                      {maskAccountNumber(loan.AccountNumber)} {/* Here's the correction */}
                    </td>
                    <td className=" py-3  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                      {loan.Date}
                    </td>
                    <td className=" py-3  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                      {loan.Status === "Success" ? (
                        <span style={{ color: "green" }}>Success</span>
                      ) : (
                        <span style={{ color: "red" }}>Failed</span>
                      )}
                    </td>
                    <td className="flex items-center  py-3">
                      <button
                        className="w-32 h-10 ml-5   font-mono   text-base font-bold rounded-3xl bg-white border-solid border-2 hover:border-indigo-600 hover:text-blue-600
                     "
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;