import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUser } from "../store/getAllUserSlice";
import { useCookies } from 'react-cookie';

const Agentmenu = () => {

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const [cookies] = useCookies(["agentToken"]);
  console.log(cookies.agentToken);

  const [totalUser, setTotalUser] = useState(null);


  // agentEmail backend api is not ready...(static--> agentEmail)
  const [data, setData] = useState(
    {
      username: "piyush",
      email: "piyush307hit@gmail.com",
      phoneNumber: "9382840149",
    },
    {
      username: "seraj",
      email: "aserajbrm01@gmail.com",
      phoneNumber: "9572413653",
    }
  );

  // http://localhost:8080/agent/getAllUsers?agentEmail=piyush307hit@gmail.com

  const getCountUsers = async () => {
    try {
      let getAllUserUrl =
        "http://localhost:8080/agent/getAllUsers?agentEmail=" + data.email;
      // console.log(getAllUserUrl);
      const response = await axios.get(getAllUserUrl, {
        headers: {
          Authorization: "Bearer " + cookies.agentToken,
        },
      });
      // console.log(response);
      console.log(response.data);
      const usersCount = response.data.body.length;
      // console.log(usersCount);
      const usersData= response.data.body;
      // console.log(usersData);
      setTotalUser(usersCount);
      dispatch(getAllUser(usersData))
      // console.log("User Count of objects in body:", usersCount);
    } catch (error) {
      console.error("https://github.com/Nittankumar12/Nidhi-Bank", error);
      setError("ERROR.....");
    }
  };
  useEffect(() => {
    getCountUsers();
  }, []);

  return (
    <div className="pl-3 pb-2">
      <section className="w-full relative ml-64 top-24 overflow-hidden">
        <div className="flex gap-3 ">

          <Link to="/agentdashboard/getuser">
          <div className=" h-[114px]  bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700  w-52 ">
            <div className=" p-2 flex flex-row ">
              <span className="w-full font-bold ">Total User</span>
              <div className="w-full ml-5 bg-green-400 rounded-lg flex flex-row">
                <div>
                  <span className=" text-green-950 tracking-wider">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <span className="text-green-950 ml-2 ">10.0%</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 flex-col ">
              <span className="text-2xl font-bold">{totalUser}</span>
              <span className="font-bold">user</span>
            </div>
          </div>
          </Link>

          <div className="   bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700  w-52 ">
            <div className=" p-2 flex flex-row ">
              <span className="w-full font-bold ">Total User</span>
              <div className="w-full ml-5 bg-green-400 rounded-lg flex flex-row">
                <div>
                  <span className=" text-green-950 tracking-wider">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <span className="text-green-950 ml-2 ">10.0%</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 flex-col ">
              <span className="text-2xl font-bold">{totalUser}</span>
              <span className="font-bold">user</span>
            </div>
          </div>
          <div className=" bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700  w-52 ">
            <div className=" p-2 flex flex-row">
              <span className="w-full font-bold ">Total User</span>
              <div className="w-full ml-5 bg-green-400 rounded-lg flex flex-row">
                <div>
                  <span className=" text-green-950 tracking-wider">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <span className="text-green-950 ml-2 ">10.0%</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 flex-col ">
              <span className="text-2xl font-bold"> 200</span>
              <span className="font-bold">user</span>
            </div>
          </div>
          <div className="bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700  w-52 ">
            <div className=" p-2 flex flex-row">
              <span className="w-full font-bold ">Total User</span>
              <div className="w-full ml-5 bg-green-400 rounded-lg flex flex-row">
                <div>
                  <span className=" text-green-950 tracking-wider">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <span className="text-green-950 ml-2 ">10.0%</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 flex-col ">
              <span className="text-2xl font-bold"> 200</span>
              <span className="font-bold">user</span>
            </div>
          </div>
          <div className=" bg-gray-300 border border-blue-500 rounded-lg shadow hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700  w-52 ">
            <div className=" p-2 flex flex-row">
              <span className="w-full font-bold ">Total User</span>
              <div className="w-full ml-5 bg-green-400 rounded-lg flex flex-row">
                <div>
                  <span className=" text-green-950 tracking-wider">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <span className="text-green-950 ml-2 ">10.0%</span>
                </div>
              </div>
            </div>
            <div className="flex p-2 flex-col ">
              <span className="text-2xl font-bold"> 200</span>
              <span className="font-bold">user</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agentmenu;
