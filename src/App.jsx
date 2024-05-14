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
import Transactions from "./components/Transactions/Transactions"
import LoanCalculator from "./components/dashboard/LoanCalculator/LoanCalculator";




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
        element: <LoginBtn />,
      },
      {
        path: "/login",
        element: <PrivateRoutes />,
      },
      // Children within children
      {
        path: "/*",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "settings/editprofile",
            element: <Mainsetting />
          },
          {
            path: "dashboard/register",
            element: <Signup />,
          },
          {
            path: "loans",
            element: <Loans />
          },
          {
            path: "transactions",
            element: <Transactions />
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
      
    ],
  },
]);
export default appRouter;
