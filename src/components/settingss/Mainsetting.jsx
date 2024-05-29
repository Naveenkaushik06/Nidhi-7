import React from 'react'

import { Link } from "react-router-dom";


const Mainsetting = () => {
  return (
    <div className='mt-24 ml-72 bg-blue-50'>
       <div className="flex font-mono  justify-content-start p-2">
        <Link to="" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Edit Profile
        </Link>
        <Link to="" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Preferences
        </Link>
        <Link to="" className="mx-4 hover:text-blue-700  font-bold text-lg">
          Security
        </Link>
      </div>
    </div>
  )
}

export default Mainsetting
