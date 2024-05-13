import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
// import AdminLogin from "./components/portallogin/AdminLogin";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import Loans from "./components/loans/Loans";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard2 from "./components/dashboard/Dashboard2"
import Mainsetting from "./components/settingss/Mainsetting";
import Transaction from "./components/dashboard/Transaction";
import RegisterForm from "./components/agent/RegisterForm";
import LoginForm from "./components/agent/LoginForm";
import ForgetForm from "./components/userlogin/ForgetForm";


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
          {
            path: "investments",
            element: <Signup />
          },
          {
            path: "settings/editprofile",
            element: <Mainsetting />
          },
          {
            path: "registerform",
            element: <RegisterForm />,
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
      
    ],
  },
]);
export default appRouter;
