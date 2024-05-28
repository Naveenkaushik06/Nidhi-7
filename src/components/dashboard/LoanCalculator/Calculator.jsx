import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Calculator = () => {
  const [ amount, setAmount ] = useState(0);
  const [ customAmount, setCustomAmount ] = useState('');
  const [ tenure, setTenure ] = useState(0);
  const [ customTenure, setCustomTenure ] = useState('');
  const [installment, setInstallMent] = useState('');
  const [payableInterest, setpayableInterest] = useState('');
  const [payableTotalAmount, setpayableTotalAmount] = useState('');
  const [ calculate, setCalculate ] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const [cookies , setCookies] = useCookies('adminToken'); 
  console.log(cookies.adminToken);

  const loanTypeList = ['Gold', 'Vehicle', 'Home', 'BusinessLoan', 'PropertyLoan', 'Appliances', 'AgricultureLoan', 'Personal', 'Scheme'];
  
  const [ formData, setFormData ] = useState(
    {
      principle: 0.0,
      loanType: '',
      time: 0
    }
  );

const handleSubmit = async (e)=> {
  e.preventDefault();
  setLoading(true);
  console.log(formData);
  console.log(cookies.adminToken);
  try {
    let calUrl = 'http://localhost:8080/Calculator/emi?principle=' + formData.principle + '&loanType=' + formData.loanType + '&time=' + formData.time;
    console.log(calUrl);
    const response = await axios.post(calUrl,
    null,
      {
      headers: {
        Authorization: "Bearer " + cookies.adminToken
      },
    }
    );
    console.log('Form submitted successfully: ', response);
    setInstallMent(response.data['loanEmi']);
    setpayableInterest(response.data['totalInterestPayable']);
    setpayableTotalAmount(response.data['totalPayment']);
  } catch (error) {
    console.error('Error submitting form: ', error);
  }
  setLoading(false);
}

  // Toggle Button & Sumit data
  const handleToggle = () => {
    setCalculate(reset => !reset);  // false
    
  };

  // Principle Amount Section
  const handleRangeAmount = (e) => {
    const inputValue = parseInt(e.target.value);
    setFormData(
      {
      ...formData,
      princliple: inputValue
    });
    setAmount(inputValue);
    if(!isNaN(inputValue)){
      setCustomAmount(inputValue); // false
    }
  };
  //  User-input
  const handleAmountUserInput = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.slice(0,7);
      setCustomAmount(parseFloat(inputValue.length));
      setAmount(parseFloat(inputValue.length));
    setFormData(
      {
        ...formData, 
        principle: inputValue
      }
    );
    // Remove any non-numeric characters from the input value
    const numericInputValue = inputValue.replace(/\D/g, '');
    // Update the input field and state only if the input value is numeric
    if (!isNaN(numericInputValue) || numericInputValue === '' ) {
      setAmount(parseFloat(numericInputValue) || 0);
      setCustomAmount(numericInputValue);
    }
  };

  // Year Section
  const handleRangeTenure = (e) => {
    const inputValue = parseInt(e.target.value);
    setFormData(
      {
      ...formData,
      time: inputValue
    });
    setTenure(inputValue);
    if (!isNaN(inputValue)) {
      setCustomTenure(inputValue);
    }
  };
  //  User-input
  const handleTenureUserInput = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.slice(0,2);
    setCustomTenure(parseFloat(inputValue.length));
    setTenure(parseFloat(inputValue.length));
    setFormData(
      {
        ...formData,
        time: inputValue
      }
    );
    
    // Remove any non-numeric characters from the input value
    const numericInputValue = inputValue.replace(/\D/g, '');
    // Update the input field and state only if the input value is numeric
    if (!isNaN(numericInputValue) || numericInputValue === '') {
      setCustomTenure(numericInputValue);
      setTenure(parseInt(numericInputValue) || 0);
    }
  };
  // Rate of Interest Section
  // const handleRangeRate = (e) => {
    // const inputValue = parseFloat(e.target.value);
    // setRate(inputValue);
    // if (!isNaN(inputValue)) {
      // setCustomRate(inputValue);
    // }
  // };
  // User-input
  // const handleRateUserInput = (e) => {
  //   const inputValue = e.target.value;
  //   // Remove any non-numeric characters except dots and ensure only two decimal places
  //   const formattedValue = inputValue.replace(/[^\d.]/g, '').match(/^\d*\.?\d{0,2}/)[0];
    
  //   // Update the input field value with the formatted value
  //   e.target.value = formattedValue;
    
  //   // Update the state with the formatted value
  //   setRate(parseFloat(formattedValue) || 0);
  //   setCustomRate(formattedValue);
  //   setFormData(
  //     {
  //       ...formData,
  //       loanRate: inputValue
  //     }
  //   );
  // };

  const handleLoanTypeUserInput = (e) => {
    const inputValue = e.target.value;
    setFormData(
      {
        ...formData,
        loanType: inputValue
      }
    );
  }

  return (
    <>
      <form className="p-5 pt-32 ml-52 w-10/12 h-auto gap-5  bg-[#3B3A70] "
      onSubmit={handleSubmit} >
      {/* <h2 className='text-center p-5 text-white font-semibold text-3xl'>EMI Calculator</h2> */}
      <div className='grid grid-cols-2 gap-5 justify-center  '>
        {/* First */}
        <div className='bg-pink-300 p-3 rounded-3xl'>
          <div className='flex'>
            <h2 className="text-xl font-semibold mb-4 ">Loan Amount</h2>
            <span className='mx-auto text-3xl'>₹</span>
            <input
              type="number"
              name='principle'
              value={customAmount !== null ? customAmount : amount}
              onChange={handleAmountUserInput}
              className='w-40 text-end text-xl p-3 border rounded-3xl bg-pink-300 appearance-none block h-8 outline-none font-bold'
            />
          </div>
          <input
            type="range"
            min="0"
            max="9999999"
            step="10000"
            value={amount}
            onChange={handleRangeAmount}
            className="block w-full bg-gray-300 appearance-none rounded h-2"
          />
          <div className="flex justify-between mt-4 text-xl">
            <span>₹ 25000</span>
            <span>₹ 10000000</span>
          </div>
        </div>
        {/* Second */}
        <div className='bg-pink-300 p-3 rounded-3xl'>
          <div className='flex justify-between'>
            <h2 className="text-xl font-semibold mb-4 ">Tenure (Year)</h2>
            <input
              type="number"
              name='time'
              value={customTenure !== null ? customTenure : tenure }
              onChange={handleTenureUserInput}
              className='w-24 text-end text-xl p-3 border rounded-3xl bg-pink-300 appearance-none block h-8 outline-none font-bold'
            />
          </div>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={tenure}
            onChange={handleRangeTenure}
            className="block w-full bg-gray-300 appearance-none rounded h-2"
          />
          <div className="flex justify-between mt-4 text-xl">
            <span>1</span>
            <span>50</span>
          </div>
        </div>
        </div> 
        <div className='grid grid-cols-1 justify-items-center gap-5 pt-5'>
          <div className='float-start p-2 '>
            <select name="loanType" id="loanType" onChange={handleLoanTypeUserInput} className='h-10 w-56 text-center text-green-500 font-semibold text-xl bg-yellow-200 rounded-s-3xl' >
            <option >
                --Select--
              </option>
              {loanTypeList.map((loanType, index) => (
                <option key= {index} value={loanType}>
                {loanType}
              </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type='button'
              className={`${calculate ? 'bg-red-500' : 'bg-yellow-500'} w-40 h-10 mx-auto rounded-3xl text-xl mt-3 `}
              // If calculate is true, submit data, otherwise toggle reset
              onClick={calculate ? handleSubmit : handleToggle}
              // Disable the button if loading is true
              disabled={loading}
            >
              {/* {calculate ? "Calculate" : "Reset"} */}
              {loading ? 'calculating....': (calculate ? "Calculate" : "Reset")}
            </button>
          </div>
        </div>
      </form>
      <div className='flex justify-around justify-items-center bg-[#3B3A70] p-5 pt-20 ml-52 w-10/12 h-40'>
        <div>
          <p className='flex flex-col text-center text-white font-extrabold font-mono'>Equated Monthly Installment 
          <span>₹ {installment}</span></p>
        </div>
        <div>
          <p className='flex flex-col text-center text-white font-extrabold font-mono'>Interest Payable<span>{payableInterest}</span></p>
        </div>
        <div>
          <p className='flex flex-col text-center text-white font-extrabold font-mono'>Total Payable Amount<span>{payableTotalAmount}</span></p>
        </div>
      </div>
    </>
  );
};
export default Calculator;
