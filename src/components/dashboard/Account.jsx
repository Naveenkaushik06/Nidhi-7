import React from "react";

const Account = () => {
  return (
    <div className="mt-20 ml-64 w-[80%] flex left  font-mono rounded-lg   justify-center bg-blue-300">
        <div className="text-3xl mt-5 font-extrabold">
        <span > Account  Details</span></div>
      <form className="flex flex-col relative  space-y-5  pb-16 mt-16">
      <label className="font-bold text-xl text-black">Account Email</label>
        <input
          type="email"
          name="accemail"
          placeholder="xyz@gmail.com"
          className="border w-[30rem] rounded-lg py-3 px-3 mt-4 bg-white border-indigo-600 placeholder-white-500 text-black"
          
        />
        
        <label className="font-bold text-xl text-black">Account Number</label>
        <input
          type="text"
          name="accnum"
          placeholder="Account number"
          className="border w-[30rem] rounded-lg py-3 px-3 mt-4 bg-white border-indigo-600 placeholder-white-500 text-black"
        />
        <label className="font-bold text-lg text-black">Pin</label>
        <input
          type="password"
          name="pin"
          placeholder="****"
          className="border rounded-lg py-3 px-3 bg-white border-indigo-600 placeholder-white-500 text-black"
        />
       
        <div className="mt-10">
      <button
          className="border mt-4 space-y-8 w-[10rem] border-indigo-600 bg-blue-800 text-black rounded-lg py-3 font-semibold"
          type="submit"
        >
          Create Account
        </button>
        </div>
      </form>
      
    </div>
  );
};

export default Account;
