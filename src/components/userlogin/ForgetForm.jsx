import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function ForgetForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies("agentToken");
  console.log(cookies.agentToken);

  const forgetAgentInfo = {
    email,
    password
  }
  
  // http://localhost:8080/agent/updateAgentPassword?agentEmail=piyush307hit@gmail.com&agentPassword=12345
  
  const handleForgetAgentPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/agent/updateAgentPassword",
        forgetAgentInfo,
        {
          headers: {
            Authorization: "Bearer " + cookies.agentToken,
          },
        }
      );
      console.log(response.data);
      navigate("/loginform");  // Uncomment this to navigate after success
    } catch (error) {
      console.error("Error:", error);
      setError(
        "Failed to reset password. Please check your inputs and try again."
      );
      if (error.response && error.response.status === 403) {
        setError(
          "Forbidden: You don't have permission to perform this action."
        );
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  Provide the email ID then you can reset your password.
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Agent Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Agent Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    New Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter New Password"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    onClick={handleForgetAgentPassword}
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/loginform"
                  >
                    Login!
                  </Link>
                </div>
              </form>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetForm;

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function ForgetForm() {
//   const [agentEmail, setAgentEmail] = useState("");
//   const [agentPassword, setAgentPassword] = useState("");
//   console.log(agentEmail);
//   console.log(agentPassword);

//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleForgetAgentPassword = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:8080/agent/updateAgentPassword",
//         {
//           params: {
//             agentEmail: agentEmail,
//             agentPassword: agentPassword
//           },
//           headers: {
//             // Add your authentication token or API key here
//             Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwaXl1c2giLCJpYXQiOjE3MTU3NzEyOTYsImV4cCI6MTcxNTc3NDg5Nn0.NijpkH5UBWg3EZ5kyKVAyPbgZi-iRQ_XBScdV7bS1u4"}`,
//           },
//         }
//       );
//       console.log(response);
//       console.log(response.data);
//       // navigate("/dashboard");       //navigation left ... //user added successfully
//     } catch (error) {
//       console.error("https://github.com/Nittankumar12/Nidhi-Bank", error);
//       setError("Empty Fields");
//     }
//   };

//   return (
//     <div>
//       <div className="container mx-auto">
//         <div className="flex justify-center px-6 my-12">
//           <div className="w-full xl:w-3/4 lg:w-11/12 flex">
//             <div
//               className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
//               style={{
//                 backgroundImage:
//                   "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')",
//                 backgroundPosition: "center",
//               }}
//             ></div>

//             <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
//               <div className="px-8 mb-4 text-center">
//                 <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
//                 <p className="mb-4 text-sm text-gray-700">
//                   Provide the emailId then you can forget your Password ?
//                 </p>
//               </div>
//               <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

//                 <div className="mb-4">
//                   <label
//                     className="block mb-2 text-sm font-bold text-gray-700"
//                     for="email"
//                   >
//                     Agent Email
//                   </label>
//                   <input
//                     value={agentEmail}
//                     onChange={(e) => setAgentEmail(e.target.value)}
//                     className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     id="email"
//                     type="email"
//                     placeholder="Enter Agent Email"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block mb-2 text-sm font-bold text-gray-700"
//                     for="password"
//                   >
//                     New Password
//                   </label>
//                   <input
//                     value={agentPassword}
//                     onChange={(e) => setAgentPassword(e.target.value)}
//                     className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                     id="password"
//                     type="password"
//                     placeholder="Enter New Password"
//                   />
//                 </div>

//                 <div className="mb-6 text-center">
//                   <button
//                     onClick={handleForgetAgentPassword}
//                     className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
//                     type="button"
//                   >
//                     Reset Password
//                   </button>
//                 </div>

//                 <hr className="mb-6 border-t" />

//                 <div className="text-center">
//                   <Link
//                     className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
//                     to="/loginform"
//                   >
//                     Login!
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgetForm;
