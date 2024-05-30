import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Loans from "./components/loans/Loans";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";
import LoanCalculator from "./components/dashboard/LoanCalculator/LoanCalculator";
import RegisterForm from "./components/agent/RegisterForm";
import LoginForm from "./components/agent/LoginForm";
import ForgetForm from "./components/userlogin/ForgetForm";
import Agentsidebar from "./components/agent/Agentsidebar";
import Agentdashboard from "./components/agent/Agentdashboard";
import Transaction from "./components/Transactions/Transactions";
import Home from "./components/landingpage/Home";
import Userdashboard from "./components/user/Userdashboard";
import Userregister from "./components/agent/Userregister";
import Userlogin from "./components/user/Userlogin";
import GetUser from "./components/agent/GetUser";
import GetAgent from "./components/admin/GetAgent";
import Admindashboard from "./components/admin/Admindashboard";
import EditProfile from "./components/settingss/EditProfile";
import Preferences from "./components/settingss/Preferences";
import Security from "./components/settingss/Security";
import GetCommission from "./components/agent/GetCommission";
import Adminmenu from "./components/admin/Adminmenu";


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
        path: "",
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
            path: "admindashboard",
            element: <Adminmenu />,
          },
          {
            path: "admindashboard/transactions",
            element: <Transaction />,
          },
          {
            path: "admindashboard/creditcards",
            element: <Register />,
          },
          {
            path: "admindashboard/mypriviliges",
            element: <Agentsidebar />,
          },

          {
            path: "admindashboard/settings",
            element: <Admindashboard />,
            children: [
              {
                path: "editprofile",
                element: <EditProfile />,
              },
              {
                path: "preferences",
                element: <Preferences />,
              },
              {
                path: "security",
                element: <Security />,
              },
            ],
          },


          {
            path: "registerform",
            element: <RegisterForm />,
          },

          {
            path: "userregister",
            element: <Userregister />,
          },

          {
            path: "admindashboard/loans",
            element: <Loans />,
          },
          {
            path: "admindashboard/transactions",
            element: <Transaction />,
          },
          {
            path: "admindashboard/calculator",
            element: <LoanCalculator />,
          },
          {
            path: "admindashboard",
            element: <Admindashboard />,
          },
          {
            path: "getagent",
            element: <GetAgent />,
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
        path: "/agentdashboard/commission",
        element: <GetCommission />,
      },

      // {
      //   path: "/agentdashboard/loans",
      //   element: <Agentdashboard />,
      // },
      // {
      //   path: "/agentdashboard/loancalculator",
      //   element: <Agentdashboard />,
      // },
      // {
      //   path: "/agentdashboard/messages",
      //   element: <Agentdashboard />,
      // },
      // {
      //   path: "/agentdashboard/services",
      //   element: <Agentdashboard />,
      // },
      // {
      //   path: "/agentdashboard/settings",
      //   element: <Agentdashboard />,
      // },

      {
        path: "/agentdashboard/getuser",
        element: <GetUser />,
      },

      // {
      //   path: "/agentdashboard/userregister",
      //   element: <Userregister/>,
      // },

      // user Routing
      {
        path: "/userlogin",
        element: <Userlogin />,
      },
      {
        path: "/userdashboard",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/deposit",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/loans",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/loancalculator",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/services",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/messages",
        element: <Userdashboard />,
      },
      {
        path: "/userdashboard/settings",
        element: <Userdashboard />,
      },
    ],
  },
]);
export default appRouter;
