import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addVoting } from '../utils/VotingPanelSlice';
import { useNavigate } from 'react-router-dom';

const Votingoption = () => {
  const navigate = useNavigate()
    const [data,setData]= useState({
        candidatename:"",
        partyname:""
    })
    const dispatch = useDispatch()
    console.log(" candiate detail",data);
    
    const handleCandidate = () => {
    
        dispatch(addVoting({
            name: data.candidatename,
            party: data.partyname,
            radioId: "123"
        }));
        setData({
          candidatename:"",
          partyname:""  
        })
    }
    const handleSubmit=()=>{
      navigate('/vote/voting')
    }
  return (
    <div className='flex w-full items-center h-screen  bg-indigo-900'>
    <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto' >
        <form onClick={(e)=>e.preventDefault()} className='flex flex-col ' >
         
          <input value={data.candidatename} onChange={(e)=>setData({...data,candidatename:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="text"  placeholder='candidate Name'/>
          <input value={data.partyname} onChange={(e)=>setData({...data,partyname:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="text" name=""  placeholder='Party Name'/>
          <input onClick={handleCandidate} className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Add Candidate" />
          <input onClick={handleSubmit} className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Submit Detail" />
        </form>
    </div>
    </div>
  )
}

export default Votingoption