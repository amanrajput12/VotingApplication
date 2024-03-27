import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addVoting} from   '../utils/VotingPanelSlice.jsx' 
import { useNavigate } from 'react-router-dom'


const VotingPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [data,setData]= useState([])
          const current = new Date().toISOString()    
    useEffect(()=>{
getdata()
    },[])
    const getdata=async()=>{
      const data = await fetch("/v1/voting/getvote",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const value = await data.json()
      console.log(' data in voting page',value);
      setData(value.data)
    }
    const handleVote =(data)=>{
       console.log(" on click the title get ",data._id);
       dispatch(addVoting({
        candidateName:data.candidateName,
        partyName:data.partyName,
        startTime:data.startTime,
        endTime:data.endTime,
        id:data._id
       }))
 navigate("/dashboard")
    }
 console.log("check id",data);
  return (
    <div>
     
         {
          
            data.map((val,i)=>
            <div key={i}>{  
              current<val?.startTime&&         
                <div onClick={()=>handleVote(val)} className='flex gap-6 border-4 border-green-700 p-4 justify-center rounded-lg  m-3  ' >
               
                <div>
                <h1> {val.title}</h1>
              
                </div>
         
             </div>
}
            </div>
            )

         }
         
    </div>
  )
}

export default VotingPage
