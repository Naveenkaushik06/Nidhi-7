import React from 'react'
// import { Link } from 'react-router-dom'
import Usersidebar from './Usersidebar'
import Userheader from './Userheader'
import Usermenu from './Usermenu'
// import GetAllUser from './GetAllUser'

const Userdashboard = () => {
  return (
    <div>
        <Userheader/>
        <Usersidebar/>
        <Usermenu />
    </div>
  )
}

export default Userdashboard
