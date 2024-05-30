import React from 'react'
import Mainsetting from '../settingss/Mainsetting'
import { Outlet } from 'react-router-dom'

const Admindashboard = () => {
  return (
    <div>
      <Mainsetting/>
      <Outlet/>
    </div>
  )
}

export default Admindashboard
