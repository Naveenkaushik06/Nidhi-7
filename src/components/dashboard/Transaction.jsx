import React, { useState } from "react";
import Header from "./Header";
import Example from "./Example";
import Sidebar from "./Sidebar";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TransactionPDF from "./TransactionPDF";

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
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("all");

  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };

  const filteredData = loanData.filter((loan) => {
    if (selectedTimeFrame === "all") return true;
    if (selectedTimeFrame === "weekly") {
      // Logic to filter weekly transactions
    } else if (selectedTimeFrame === "today") {
      // Logic to filter today's transactions
    } else if (selectedTimeFrame === "monthly") {
      // Logic to filter monthly transactions
    }
  });

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ height: "100vh", background: "lightgrey" }}>
        <div className="p-10 mt-20 h-auto mr-10 sm:ml-64">
          {/* Time frame selection buttons */}
          <div className="flex justify-end mb-4">
            <button
              className={`mr-2 font-mono text-base ${
                selectedTimeFrame === "weekly" ? "font-bold" : ""
              }`}
              onClick={() => handleTimeFrameChange("weekly")}
            >
              Weekly
            </button>
            <button
              className={`mr-2 font-mono text-base ${
                selectedTimeFrame === "today" ? "font-bold" : ""
              }`}
              onClick={() => handleTimeFrameChange("today")}
            >
              Today
            </button>
            <button
              className={`mr-2 font-mono text-base ${
                selectedTimeFrame === "monthly" ? "font-bold" : ""
              }`}
              onClick={() => handleTimeFrameChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`mr-2 font-mono text-base ${
                selectedTimeFrame === "all" ? "font-bold" : ""
              }`}
              onClick={() => handleTimeFrameChange("all")}
            >
              All Transactions
            </button>
          </div>

          {/* Transaction table */}
          <table className="w-full p-3 text-sm text-center rounded-lg text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-slate-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="w-4 p-4">
                  <div className="flex items-center">
                    <span className="font-bold font-mono text-base whitespace-nowrap text-gray-400">
                      Bank Name
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-8 py-3 font-mono text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                  Transaction ID
                </th>
                <th className="py-3 text-base font-mono font-bold text-gray-400 whitespace-nowrap dark:text-white">
                  Amount
                </th>
                <th className="py-3 font-mono text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                  Account Number
                </th>
                <th className="py-3 font-mono text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                  Date
                </th>
                <th className="py-3 font-mono text-base font-bold text-gray-400 whitespace-nowrap dark:text-white">
                  Status
                </th>
                <th className="text-base font-bold font-mono py-3 text-gray-400 whitespace-nowrap dark:text-white">
                  Receipt
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Render transactions based on selected time frame */}
              {filteredData.map((loan) => (
                <tr key={loan.TransactionID} className="bg-white text dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <span className="flex-wrap font-bold text-black whitespace-nowrap">
                        {loan.Bank}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 font-mono text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.TransactionID}
                  </td>
                  <td className="py-3 font-mono text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.Amount}
                  </td>
                  <td className="py-3 font-mono text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                    {maskAccountNumber(loan.AccountNumber)}
                  </td>
                  <td className="py-3 font-mono text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.Date}
                  </td>
                  <td className="py-3 font-mono text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.Status === "Success" ? (
                      <span style={{ color: "green" }}>Success</span>
                    ) : (
                      <span style={{ color: "red" }}>Failed</span>
                    )}
                  </td>
                  <td className="flex items-center py-3">
                    <PDFDownloadLink
                      className="w-32 py-1 h-10 font-mono text-base font-bold rounded-3xl border-solid border-2 hover:border-indigo-600 hover:text-blue-600"
                      document={<TransactionPDF transaction={loan} />}
                      fileName={`transaction_${loan.TransactionID}.pdf`}
                    >
                      {({ loading }) => (loading ? "Loading..." : "Download")}
                    </PDFDownloadLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
