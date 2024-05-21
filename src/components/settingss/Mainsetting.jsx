import React from 'react'
import EditProfile from './EditProfile'
import Preferences from './Preferences'
import Security from './Security'

const Mainsetting = () => {
  return (
    <div className='mt-24 ml-72 bg-blue-50'>
      <EditProfile className="col-span-10" />
      <Preferences />
      <Security />
    </div>
  )
}

export default Mainsetting
