import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';

const Usermenu = () => {

  const[cookies] = useCookies(['agentToken']);
  console.log(cookies.agentToken);

  const [data, setData] = useState(
    [
      {
        "username": "piyush",
        "email": "piyush307hit@gmail.com",
        "phoneNumber": "5555555555"
      },
    ]
  )
console.log(data);

  // const [username, setUsername]=useState("");
  // const [email, setEmail]=useState("");
  // const [phoneNumber, setPhoneNumber]=useState("");

  const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const getAllUserInfo = {
  //   username,
  //   email,
  //   phoneNumber
  // }
  // console.log(getAllUserInfo);

  // http://localhost:8080/agent/getAllUsers?agentEmail=piyush307hit@gmail.com
    const getAllUser = async () => {
      try {
        let calUrl = 'http://localhost:8080/agent/getAllUsers?agentEmail=' + data[0].email;
        console.log(calUrl);
        const response = await axios.get(
          calUrl,null,
          {
            headers: {
              Authorization: "Bearer " + cookies.agentToken
            },
          }
        );
        console.log(response);
        // console.log(response.data);
      } catch (error) {
        console.error("https://github.com/Nittankumar12/Nidhi-Bank", error);
        setError("ERROR.....");
      }
    };
    useEffect(()=>{
      getAllUser()
    },[])

  return (
    <div className="pl-3 pb-2">
      <section className="w-full relative ml-72 top-20 overflow-hidden">
        <div className="flex gap-3 ">

          <Link to="/userdashboard/getalluser">
          <div className=" border rounded-lg w-52 bg-gray-50 ">
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
              <span className="text-2xl font-bold"> 100</span>
              <span className="font-bold">user</span>
            </div>
          </div>
          </Link>

          <div className=" border rounded-lg w-52 bg-gray-50">
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
          <div className=" border rounded-lg w-52 bg-gray-50">
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
          <div className=" border rounded-lg w-52 bg-gray-50">
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
          <div className=" border rounded-lg w-52 bg-gray-50">
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

export default Usermenu;
