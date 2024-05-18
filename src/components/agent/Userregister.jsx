import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Agentheader from "./Agentheader";
import Agentsidebar from "./Agentsidebar";

const Userregister = () => {

  // const [firstName, setFirstName]=useState("");
  // const [lastName, setLastName]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [phoneNumber, setPhoneNumber]=useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const addUserInfo = {
    // firstName,
    // lastName,
    username,
    email,
    phoneNumber
  }
  console.log(addUserInfo);

    // http://localhost:8080/admin/login-admin

    const handleSubmit = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/admin/addAgent",
          addUserInfo,
          {
            headers: {
              // Add your authentication token or API key here
              Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXZlZW4iLCJpYXQiOjE3MTU4NDA4ODUsImV4cCI6MTcxNTg0NDQ4NX0.W1eynexz05eByl625E0KJzcCWdAa71dwZp2EsrodShE"}`,
            },
          }
        );
        console.log(response);
        console.log(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.error("https://github.com/Nittankumar12/Nidhi-Bank", error);
        setError("Empty Fields");
      }
    };
    
  return (
    <div>
    <Agentheader/>
    <Agentsidebar/>
      <div className="p-8 ml-72 mt-20 rounded border border-gray-200">
        <h1 className="font-mono font-bold text-3xl">Welcome to Nidhi Add User Section </h1>

        <form>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            
            {/* <div>
              <label
                htmlFor="first-name"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
               First Name
              </label>
              <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
               Last Name
              </label>
              <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
                type="last-name"
                name="last-name"
                id="last-name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="Enter last name"
              />
            </div> */}
            <div>
              <label
                htmlFor="username"
                className="text-md text-gray-700 block mb-1 font-mono font-bold"
              >
                Username
              </label>
              <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
                type="username"
                name="username"
                id="username"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full font-mono"
                placeholder="********"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
            onClick={handleSubmit}
              type="button"
              className="py-2 px-4 font-mono font-bold bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Create Account
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Userregister;
