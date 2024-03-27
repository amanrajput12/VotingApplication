import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import DatePicker from '../utils/DatePicker.jsx';

const Votingoption = () => {
  const navigate = useNavigate()

    const [data,setData]= useState({
        candidatename:"",
        partyname:"",
        title:""
    })
    const [time,setTime]= useState({
      start:"",
      end:""
    })
    const dispatch = useDispatch()
   
   
   
    const handleTime =(time)=>{
       console.log(' in option ',time);
       setTime({
        start:time?.startTime,
        end:time?.endTime
       })
    }

    const votingSet =async()=>{
        const voting = await fetch("/v1/voting/addvote",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({votingdetail:data,timer:time,})
        })
        const value = await voting.json()
        console.log(" setup data",value);
    }
   
    console.log(" check time ",time);
  return (
    <div className='flex w-full items-center h-screen  bg-indigo-900'>
    <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto' >
          
        <form onClick={(e)=>e.preventDefault()} className='flex flex-col ' >
         <DatePicker onChange={handleTime} result={handleTime}/>
                <input className='text-center  border-2 border-indigo-400  mb-2' type="text" value={data.title} onChange={(e)=>setData({...data,title:e.target.value})} placeholder='title'  />
          <input  value={data.candidatename} onChange={(e)=>setData({...data,candidatename:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="text"  placeholder='candidate Name'/>
          <input value={data.partyname} onChange={(e)=>setData({...data,partyname:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="text" name=""  placeholder='Party Name'/>
         
          <input onClick={votingSet} className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Submit Detail" />
        </form>
       
    </div>
    </div>
  )
}

export default Votingoption
