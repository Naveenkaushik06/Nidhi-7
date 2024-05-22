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
import GetUser from "./components/agent/GetUser";
import GetAllAgent from "./components/admin/GetAllAgent";


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
          {
            path:"dashboard/getagents",
            element:<GetAllAgent />
          }
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


      //agent routing

      {
        path: "/agentdashboard",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/transactions",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/deposit",
        element: <Agentdashboard />,
      },

      {
        path: "/agentdashboard/loans",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/loancalculator",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/messages",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/services",
        element: <Agentdashboard />,
      },
      {
        path: "/agentdashboard/settings",
        element: <Agentdashboard />,
        
      },
      {
        path: "/agentdashboard/getuser",
        element: <GetUser />,
      },

      {
        path: "/agentdashboard/userregister",
        element: <Userregister/>,
      },
        // user Routing
      {
        path: "/userlogin",
        element: <Userlogin/>,
      },
      {
        path: "/userdashboard",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/deposit",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/loans",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/loancalculator",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/services",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/messages",
        element: <Userdashboard/>,
      },
      {
        path: "/userdashboard/settings",
        element: <Userdashboard/>,
      },
     
     
      
    ],
  },
]);
export default appRouter;
