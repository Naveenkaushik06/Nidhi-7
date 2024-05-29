import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getAllAgent } from "../store/getAllAgentSlice";
import { useCookies } from "react-cookie";
import Dashboard from "../dashboard/Dashboard";

const Adminmenu = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const [cookies] = useCookies(["adminToken"]);
  console.log(cookies.adminToken);

  const [totalAgent, setTotalAgent] = useState(null);

  const getCountAgents = async () => {
    try {
      let getAllAgentUrl =
        "http://localhost:8080/admin/getAllAgentsIdentifierDetails";
      // console.log(getAllAgentUrl);
      const response = await axios.get(getAllAgentUrl, {
        headers: {
          Authorization: "Bearer " + cookies.adminToken,
        },
      });
      // console.log(response);
      // console.log(response.data);
      const agentsCount = response.data.length;
      // console.log(agentsCount);
      const agentsData = response.data;
      // console.log(agentsData);
      setTotalAgent(agentsCount);
      dispatch(getAllAgent(agentsData));
      console.log("Agent Count of objects:", agentsCount);
    } catch (error) {
      console.error("https://github.com/Nittankumar12/Nidhi-Bank", error);
      setError("ERROR.....");
    }
  };
  useEffect(() => {
    getCountAgents();
  }, []);

  return (
    <div className="pl-3 pb-2">
      <section className="w-full relative ml-64 top-24 overflow-hidden">
        <div className="flex gap-3 ">
          <Link to="/getagent">
            <div className=" font-serif  bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700 ">
              <div className="p-1 flex flex-row ">
                <span className="w-full font-bold  ">Total Agent</span>
                <div className="w-24 p-[2px]  bg-green-400 rounded-lg flex flex-row">
                  <div>
                    <span className=" text-green-950 ">
                      <TrendingUp />
                    </span>
                  </div>
                  <div>
                    <span className=" text-green-950 ml-1 ">10.0%</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col ">
                <span className="text-2xl font-bold">{totalAgent}</span>
                <span className="font-bold">agent</span>
              </div>
            </div>
          </Link>

          <div className=" font-serif p-1 bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700 ">
              <div className=" flex flex-row ">
                <span className="w-full font-bold  ">Total Agent</span>
                <div className="w-24 p-[2px]  bg-green-400 rounded-lg flex flex-row">
                  <div>
                    <span className=" text-green-950 ">
                      <TrendingUp />
                    </span>
                  </div>
                  <div>
                    <span className=" text-green-950 ml-1 ">10.0%</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col ">
                <span className="text-2xl font-bold">{totalAgent}</span>
                <span className="font-bold">agent</span>
              </div>
            </div>
            
            <div className=" font-serif p-1 bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700 ">
              <div className=" flex flex-row ">
                <span className="w-full font-bold  ">Total Agent</span>
                <div className="w-24 p-[2px]  bg-green-400 rounded-lg flex flex-row">
                  <div>
                    <span className=" text-green-950 ">
                      <TrendingUp />
                    </span>
                  </div>
                  <div>
                    <span className=" text-green-950 ml-1 ">10.0%</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col ">
                <span className="text-2xl font-bold">{totalAgent}</span>
                <span className="font-bold">agent</span>
              </div>
            </div>
            
            <div className=" font-serif p-1 bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700 ">
              <div className=" flex flex-row ">
                <span className="w-full font-bold  ">Total Agent</span>
                <div className="w-24 p-[2px]  bg-green-400 rounded-lg flex flex-row">
                  <div>
                    <span className=" text-green-950 ">
                      <TrendingUp />
                    </span>
                  </div>
                  <div>
                    <span className=" text-green-950 ml-1 ">10.0%</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col ">
                <span className="text-2xl font-bold">{totalAgent}</span>
                <span className="font-bold">agent</span>
              </div>
            </div>
            
            <div className=" font-serif p-1 bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700 ">
              <div className=" flex flex-row ">
                <span className="w-full font-bold  ">Total Agent</span>
                <div className="w-24 p-[2px]  bg-green-400 rounded-lg flex flex-row">
                  <div>
                    <span className=" text-green-950 ">
                      <TrendingUp />
                    </span>
                  </div>
                  <div>
                    <span className=" text-green-950 ml-1 ">10.0%</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col ">
                <span className="text-2xl font-bold">{totalAgent}</span>
                <span className="font-bold">agent</span>
              </div>
            </div>
            
        </div>
      </section>
      <Dashboard/>
    </div>
  );
};

export default Adminmenu;
