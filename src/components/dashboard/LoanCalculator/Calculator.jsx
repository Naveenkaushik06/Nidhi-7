import React, { useState } from 'react';


const Calculator = () => {
  const [ amount, setAmount ] = useState(0);
  const [ customAmount, setCustomAmount ] = useState('');
  const [ tenure, setTenure ] = useState(1);
  const [ customTenure, setCustomTenure ] = useState('');
  const [ rate, setRate ] = useState(0);
  const [ customRate, setCustomRate ] = useState('');
  const [ calculate, setCalculate ] = useState(true);

  // Toggle Button & Sumit data
  const handleToggle = () => {
    setCalculate(reset => !reset);  // false
  }

  // Principle Amount Section
  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    setAmount(parseInt(inputValue));
    if (!isNaN(inputValue)) {
      setCustomAmount(inputValue);
      // setCustomAmount(inputValue.toString());
    }
  };
  //  Handle user input value-amount
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setCustomAmount(inputValue);
    setAmount(parseInt(inputValue));
    // Remove any non-numeric characters from the input value
    const numericInputValue = inputValue.replace(/\D/g, '');
    // Update the input field and state only if the input value is numeric
    if (!isNaN(numericInputValue) || numericInputValue === '') {
      setCustomAmount(numericInputValue);
      setAmount(parseInt(numericInputValue) || 0);
    }
  };

  // Year Section
  const handleYearSlide = (e) => {
    const inputValue = e.target.value;
    setTenure(parseInt(inputValue));
    if (!isNaN(inputValue)) {
      setCustomTenure(inputValue);
      // setCustomAmount(inputValue.toString());
    }
  };
  //  Handle user input value-amount
  const handlYearChangeInput = (e) => {
    const inputValue = e.target.value;
    setCustomTenure(inputValue);
    setTenure(parseInt(inputValue));
    // Remove any non-numeric characters from the input value
    const numericInputValue = inputValue.replace(/\D/g, '');
    // Update the input field and state only if the input value is numeric
    if (!isNaN(numericInputValue) || numericInputValue === '') {
      setCustomTenure(numericInputValue);
      setTenure(parseInt(numericInputValue) || 0);
    }
  };
  // Rate of Interest
  // Rate of Interest
  const handleRateInput = (e) => {
    const inputValue = e.target.value;
    setCustomRate(inputValue); // Update customRate immediately
    const parsedValue = parseFloat(inputValue); // Parse the input value as a float
    if (!isNaN(parsedValue)) { // Check if the parsed value is a valid number
      setRate(parsedValue); // Update the rate state if it's a valid number
    }
  };

  const handleRateSlide = (e) => {
    const inputValue = parseFloat(e.target.value);
    setRate(inputValue.toFixed(2));
    setCustomRate(inputValue.toFixed(2));
    const numericInputValue = inputValue.replace(/\D/g, '');
    if (!isNaN(numericInputValue) && numericInputValue === '') {
      setRate(numericInputValue || 0);
      setCustomRate(numericInputValue);
    }
  };

  return (
    <>
      <form className="p-5 pt-32 ml-52 w-10/12 h-auto gap-5  bg-[#3B3A70]">
      {/* <h2 className='text-center p-5 text-white font-semibold text-3xl'>EMI Calculator</h2> */}
      <div className='grid grid-cols-3 gap-5 justify-center  '>
        {/* First */}
        <div className='bg-pink-300 p-3 rounded-3xl'>
          <div className='flex'>
            <h2 className="text-xl font-semibold mb-4 ">Loan Amount</h2>
            <span className='mx-auto text-3xl'>₹</span>
            <input
              type="text"
              value={customAmount}
              onChange={handleInput}
              className='w-24 text-end text-xl p-2 rounded-3xl bg-pink-300 appearance-none block h-8 outline-none font-bold'
            />
          </div>
          <input
            type="range"
            min="0"
            max="1000000"
            step="5000"
            value={amount}
            onChange={handleAmountChange}
            className="block w-full bg-gray-300 appearance-none rounded h-2"
          />
          <div className="flex justify-between mt-4 text-xl">
            <span>₹ 25000</span>
            <span>₹ 100000</span>
          </div>
        </div>
        {/* Second */}
        <div className='bg-pink-300 p-3 rounded-3xl'>
          <div className='flex justify-around'>
            <h2 className="text-xl font-semibold mb-4 ">Tenure (Year)</h2>
            <input
              type="text"
              value={customTenure}
              onChange={handlYearChangeInput}
              className='w-24 text-end text-xl p-2 rounded-3xl bg-pink-300 appearance-none block h-8 outline-none font-bold'
            />
          </div>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={tenure}
            onChange={handleYearSlide}
            className="block w-full bg-gray-300 appearance-none rounded h-2"
          />
          <div className="flex justify-between mt-4 text-xl">
            <span>1</span>
            <span>50</span>
          </div>
        </div>
        {/* Third */}
        <div className='bg-pink-300 p-3 rounded-3xl'>
          <div className='flex justify-around'>
            <h2 className="text-xl font-semibold mb-4 ">Rate of interest</h2>
            <input
              type="text"
              value={customRate}
              onChange={handleRateInput}
              className='w-24 text-end text-xl p-2 rounded-3xl bg-pink-300 appearance-none block h-8 outline-none font-bold'
            />
          </div>
          <input
            type="range"
            min="0.00"
            max="35"
            step="0.01"
            value={rate}
            onChange={handleRateSlide}
            className="block w-full bg-gray-300 appearance-none rounded h-2"
          />
          <div className="flex justify-between mt-4 text-xl">
            <span>1 %</span>
            <span>35 %</span>
          </div>
        </div>
        </div>
        <div className='grid grid-cols-2 justify-items-center gap-5 pt-5'>
          <div className='float-start p-2 '>
            <select name="" id="" className='h-10 w-56 text-center text-green-500 font-semibold text-xl bg-yellow-200 rounded-s-3xl' >
              <option value="">
                Loan Type
              </option>
              <option value="">
                Gold
              </option>
              <option value="">
                Vehicle
              </option>
              <option value="">
                Personal
              </option>
              <option value="">
                Property Loan
              </option>
              <option value="">
                Home Loan
              </option>
              <option value="">
                Appliances
              </option>
              <option value="">
                Agriculture Loan
              </option>
              <option value="">
                Business Loan
              </option>
            </select>
          </div>
          <div>
            <button
              type='button'
              className={`${calculate ? 'bg-red-500' : 'bg-yellow-500'} w-40 h-10 mx-auto rounded-3xl text-xl mt-3 `}
              onClick={handleToggle}
            >
              {calculate ? "Calculate" : "Reset"}
            </button>
          </div>
        </div>
      </form>
      <div className='flex justify-around justify-items-center bg-[#3B3A70] p-5 pt-20 ml-52 w-10/12 h-40'>
        <div>
          <p className='flex flex-col text-center text-white font-extrabold font-mono'>Equated Monthly Installment <span>₹</span></p>
        </div>
        <div>
          <p className='flex flex-col text-center text-white font-extrabold font-mono'>Interest Rate<span>%</span></p>
        </div>
      </div>
    </>
  );
};
export default Calculator;
