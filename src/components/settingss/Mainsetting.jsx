import React from 'react'
import { Link } from "react-router-dom";


const Mainsetting = () => {
  return (
    <div className='mt-24 ml-56 pb-2 mr-3 rounded-md bg-blue-200'>
       <div className="flex font-mono   justify-content-start p-2">
        <Link to="editprofile" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Edit Profile
        </Link>
        <Link to="preferences" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Preferences
        </Link>
        <Link to="security" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Security
        </Link>
      </div>   
    </div>
  )
}

export default Mainsetting