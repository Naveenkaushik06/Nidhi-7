import React, { useState } from 'react';

const EMITable = () => {
  const [showContent, setShowContent] = useState(true);

  const handleView = () => {
    setShowContent(prevShowContent => !prevShowContent);
  };

  return (
    <div className='pl-56 p-2 pt-20 bg-gray-100 h-[100vh]'>
      <div className='flex justify-between p-5'>
        <h2 className={`text-2xl ${showContent ? 'underline' : ''}`}>Yearly Schedule</h2>
        <a className='text-xl cursor-pointer' onClick={handleView}>
          {showContent ? 'View less' : 'View more'}
        </a>
      </div>
      {showContent && (
        <div className="overflow-x-auto max-w-full">
          <table className="table-auto w-full md:w-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 md:px-6 md:py-4">Year</th>
                <th className="px-4 py-2 md:px-6 md:py-4">Opening Balance</th>
                <th className="px-4 py-2 md:px-6 md:py-4">Amount paid by Customer (EMI*12)</th>
                <th className="px-4 py-2 md:px-6 md:py-4">Payable Interest</th>
                <th className="px-4 py-2 md:px-6 md:py-4">Repayed principal during the year</th>
                <th className="px-4 py-2 md:px-6 md:py-4">Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 md:px-6 md:py-4">1</td>
                <td className="border px-4 py-2 md:px-6 md:py-4">4,677</td>
                <td className="border px-4 py-2 md:px-6 md:py-4">4,677</td>
                <td className="border px-4 py-2 md:px-6 md:py-4">4,677</td>
                <td className="border px-4 py-2 md:px-6 md:py-4">21,959</td>
                <td className="border px-4 py-2 md:px-6 md:py-4">1,22,041</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EMITable;
