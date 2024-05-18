import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import Loans from "./components/loans/Loans";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";

import Mainsetting from "./components/settingss/Mainsetting";
// import Transactions from "./components/Transactions/Transactions"
import LoanCalculator from "./components/dashboard/LoanCalculator/LoanCalculator";

import Dashboard2 from "./components/dashboard/Dashboard2"
// import Mainsetting from "./components/settingss/Mainsetting";
// import Transaction from "./components/dashboard/Transaction";
import RegisterForm from "./components/agent/RegisterForm";
import LoginForm from "./components/agent/LoginForm";
import ForgetForm from "./components/userlogin/ForgetForm";
// import Agentlogin from "./components/agent/Agentlogin";
import Agentsidebar from "./components/agent/Agentsidebar";
import Agentdashboard from "./components/agent/Agentdashboard";
import Transaction from "./components/Transactions/Transactions";

import Home from "./components/landingpage/Home";
import Userdashboard from "./components/user/Userdashboard";
import Userregister from "./components/agent/Userregister";
import Userlogin from "./components/user/Userlogin";



function AppLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <PrivateRoutes />,
      },
      // Children within children
      {
        path: "/loginform",
        element: <LoginForm />,
      },
      {
        path: "/*",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "transactions",
            element: <Transaction />
          },
          {
            path: "creditcards",
            element: <Register />
          },
          // {
          //   path: "services",
          //   element: <Agentlogin/>
          // },
          
          {
            path: "mypriviliges",
            element: <Agentsidebar/>
          },
          {
            path: "settings/editprofile",
            element: <Mainsetting />
          },
          {
            path: "registerform",
            element: <RegisterForm />,
          },
          {
            path: "loans",
            element: <Loans />
          },
          {
            path: "transactions",
            element: <Transaction/>
          },
          {
            path: "calculator",
            element: <LoanCalculator />
          },
        ],
      },
      {
        path: "/forgetpassword",
        element: <Login />,
      },
      {
        path: "/otpvarification",
        element: <Register />,
      },
      {
        path: "/forgetform",
        element: <ForgetForm />,
      },
      {
        path: "/agentdashboard",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/userregister",
        element: <Userregister/>,
      },
      {
        path: "/userdashboard",
        element: <Userdashboard/>,
      },
      {
        path: "/userlogin",
        element: <Userlogin/>,
      },

     
      
    ],
  },
]);
export default appRouter;
