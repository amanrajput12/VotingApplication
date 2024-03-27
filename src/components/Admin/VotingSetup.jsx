import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import DatePicker from '../utils/DatePicker'


const VotingSetup = () => {
 
  return (
    <div>
     Dashboard
      
         <Outlet/>
    </div>
  )
}

export default VotingSetup
