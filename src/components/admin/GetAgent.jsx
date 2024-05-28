import React from "react";
import Adminmenu from "./Adminmenu";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import GetAllAgent from "./GetAllAgent";

const GetAgent = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Adminmenu />
      <GetAllAgent/>
    </div>
  );
};

export default GetAgent;
