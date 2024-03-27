import React, { useEffect,useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VotingLogin from './VotingLogin.jsx'



const Dashboard = () => {
  const navigate = useNavigate()
  const myref = useRef(null)
  const userDetail =  useSelector((store)=>store.user)
  
  console.log(userDetail);
  useEffect(()=>{
   handleDashboard()
  },[])

  const handleDashboard=()=>{
    if(!userDetail.verified){
      navigate("/")
    }
  }
 
  return (
    <div>
   
     { userDetail.verified && 
       <VotingLogin/>    
     }
    </div>
  )
}

export default Dashboard
