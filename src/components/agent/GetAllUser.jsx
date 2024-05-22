import { useSelector } from "react-redux";
 
const GetAllUser = () => {
  // const empData = [
  //   {
  //     id: 1,
  //     empId: "101",
  //     empName: "rahul",
  //     empEmail: "rahul@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "97987",
  //     empAddress: "jaipur",
  //   },
  //   {
  //     id: 2,
  //     empId: "102",
  //     empName: "adi",
  //     empEmail: "adi@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "979872",
  //     empAddress: "gaya",
  //   },
  //   {
  //     id: 3,
  //     empId: "103",
  //     empName: "amit",
  //     empEmail: "amit@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "979874",
  //     empAddress: "pune",
  //   },
  //   {
  //     id: 4,
  //     empId: "104",
  //     empName: "somu",
  //     empEmail: "somu@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "979879",
  //     empAddress: "bengaluru",
  //   },
  //   {
  //     id: 5,
  //     empId: "105",
  //     empName: "ruhi",
  //     empEmail: "ruhi@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "979888",
  //     empAddress: "gurgaon",
  //   },
  //   {
  //     id: 6,
  //     empId: "106",
  //     empName: "astha",
  //     empEmail: "astha@gmail.com",
  //     empDept: "CSE",
  //     empPhone: "979449",
  //     empAddress: "delhi",
  //   },
  // ];
  // console.log(empData);
  
  const listOfAllUsers  = useSelector((store) => store.getalluser.listOfAllUsers);
  console.log(listOfAllUsers[0]);

  // const { filteredEmployeeData } = useSelector(
  //   (store) => store.totalEmployeeData
  // );

  // console.log(filteredEmployeeData);
  // const {empId,empName,empEmail,empAddress,empPhone,empDept} = empData;

  return (
    <>
      <div>
        <div
          className="flex flex-wrap row employee-card-detail w-9/12 h-auto ml-72 mt-32 "
          style={{ maxWidth: "66rem" }}
        >
          {Array.isArray(listOfAllUsers) && listOfAllUsers.length > null ? (
            listOfAllUsers[0].map((data, index) => (
              <div className="col-md-6 bg-white -mt-10 " key={index}>
                <div className="card mb-1 employee-card-detai ">
                  <div className="row g-0 bg-gray-50 mt-2 ml-1 mb-10 mr-10 ">
                    <div className="col-md-8 mt-4 ">
                      <div className=" p-4 bg-indigo-300 border border-green-400 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h6 className="text-extrabold text-xl font-mono">
                          <b>Username:</b> {data.userName}
                        </h6>
                        <p className="text-extrabold text-xl font-mono">
                          <b>Email:</b> {data.email}
                        </p>

                        <h6 className="text-extrabold text-xl font-mono">
                          <b>Phone: </b>
                          {data.phoneNumber}
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
                    {/* <div className="col-md-4">
                      <img
                        style={{
                          width: "90px",
                          margin: "25px 0px 0px 15px",
                          borderRadius: "10px",
                        }}
                        src={data.Picture}
                        className="img-fluid rounded-start card-img"
                        alt="..."
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{}}>
              <p>No Users data available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetAllUser;

//  <a
//   href="#"
//   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
// >
//   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//     Noteworthy technology acquisitions 2021
//   </h5>
//   <p className="font-normal text-gray-700 dark:text-gray-400">
//     Here are the biggest enterprise technology acquisitions of 2021 so far, in
//     reverse chronological order.
//   </p>
// </a>; 
