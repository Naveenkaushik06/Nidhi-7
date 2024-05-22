import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {

  const [usernameOrEmailOrPhoneNumber, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState("");
  const navigate = useNavigate();

  const [cookies , setCookies] = useCookies('agentToken'); 
  console.log(cookies.agentToken);

  // store token in cookies
  const setInCookies = (name, data)=> {
    let jwtToken = data.accessToken;
    setCookies(name, jwtToken);
    let tokenDetails = cookies.agentToken;
    console.log(tokenDetails);
  };

  const agentLoginInfo = {
    usernameOrEmailOrPhoneNumber,
    password
  }
  console.log(agentLoginInfo);
  
  // API call to post Data
  const handleAgentLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/home/agent",
        agentLoginInfo
      );
      console.log(response.data);
      setInCookies('agentToken', response.data);
      // setIsAuthenticated(true);
      navigate("/agentdashboard");  //agentDashboard required page...
    } catch (error) {
      console.error("Agent Login failed:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold font-mono text-4xl">
              
              Hey Agent! Welcome to Nidhi Bank
            </h1>
            <p className="text-white font-mono font-bold mt-1">The most popular Banking system !</p>
            <button
              type="button"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold font-mono mb-2"
            >
              <Link to="#">Read More </Link>
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold font-mono text-2xl mb-5">
              Hello Agent! login here
            </h1>
            
            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none font-mono "
                type="text"
                name=""
                id=""
                placeholder="Full name"
              />
            </div> */}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
              value={usernameOrEmailOrPhoneNumber}
              onChange={(e)=>setUsername(e.target.value)}
                className="pl-2 outline-none border-none font-mono "
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
            </div>

            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none font-mono "
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
            </div> */}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                className="pl-2 outline-none border-none font-mono "
                type="text"
                name=""
                id=""
                placeholder="Password"
              />
            </div>

            <div className="flex items-center  py-2 mt-1 px-3 rounded-2xl">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light font-mono text-gray-500 dark:text-gray-300"
                >
                  I accept the
                  <a
                    className="font-medium pl-1 font-mono text-primary-600 hover:underline dark:text-primary-500"
                    to="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
            onClick={handleAgentLogin}
              type="button"
              className="block w-full font-mono font-bold bg-indigo-600 mt-4 py-2 rounded-2xl text-white  mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 font-mono font-bold hover:text-blue-500 cursor-pointer">
              <Link to="/forgetform">Forgot Password ?</Link>
            </span>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
