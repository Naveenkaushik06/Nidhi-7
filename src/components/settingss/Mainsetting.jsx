import React from 'react'

import { Link } from "react-router-dom";
import EditProfile from './EditProfile';


const Mainsetting = () => {
  return (
    <div className='mt-24 ml-56 pb-2 mr-3 rounded-md bg-blue-200'>
       <div className="flex font-mono   justify-content-start p-2">
        <Link to="#" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Edit Profile
        </Link>
        <Link to="/admindashboard/preferences" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Preferences
        </Link>
        <Link to="admindashboard/settings/security" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Security
        </Link>
      </div>
      <EditProfile/>
      
    </div>
  )
}

export default Mainsetting