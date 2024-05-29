import { useSelector } from "react-redux";
 
const GetAllAgent = () => {

  const listOfAllAgents  = useSelector((store) => store.getallagent.listOfAllAgents);
  // console.log(listOfAllAgents[0]);

  return (
    <>
      <div>
        <div
          className="flex flex-wrap row employee-card-detail w-9/12 h-auto ml-72 mt-32 "
          style={{ maxWidth: "66rem" }}
        >
          {Array.isArray(listOfAllAgents) && listOfAllAgents.length > null ? (
            listOfAllAgents[0].map((data, index) => (
              <div className="col-md-6 bg-white -mt-10 " key={index}>
                <div className="card mb-1 employee-card-detai ">
                  <div className="row g-0 bg-gray-50 mt-2 ml-1 mb-10 mr-10 ">
                    <div className="col-md-8 mt-4 ">
                      <div className="w-[450px] h-[230px] p-4 bg-indigo-300 border border-green-400 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h6 className="text-extrabold text-xl font-mono">
                          <b>Name:</b> {data.name}
                        </h6>
                        <p className="text-extrabold text-xl font-mono">
                          <b>Email:</b> {data.email}
                        </p>

                        <h6 className="text-extrabold text-xl font-mono">
                          <b>AgentId: </b>
                          {data.agentId}
                        </h6>

                        <h6 className="text-extrabold text-xl font-mono">
                          <b>AgentRefferalCode: </b>
                          {data.agentRefferalCode}
                        </h6>

                        <div className="flex justify-center mt-5">
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                            onClick={() => navigate("/viewemployeedetails")}
                          >
                            view
                          </button>
                          <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={() => handleDeleteEmp(id)}
                          >
                            delete
                          </button>

                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                            onClick={() => {
                              localStorage.setItem(
                                "updateEmployeeData",
                                JSON.stringify(data)
                              );
                              navigate("/addemployeeform");
                            }}
                          >
                            update
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{}}>
              <p>No Agents data available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetAllAgent;
