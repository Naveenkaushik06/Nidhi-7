import React from 'react'
import GetAllUser from './GetAllUser'
import Agentheader from './Agentheader'
import Agentsidebar from './Agentsidebar'
import Agentmenu from './Agentmenu'

const GetUser = () => {
  return (
    <div>
        <Agentheader/>
        <Agentsidebar/>
        <Agentmenu/>
        <GetAllUser/>
        
      
    </div>
  )
}

export default GetUser
