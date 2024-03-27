import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Vote = () => {
    const data = useSelector((store)=>store.vote)
     const [name,setName] = useState([])
     const [party,setParty] = useState([])
         
     console.log("check",Array.isArray(name));
     useEffect(()=>{
      handleAdd()
     },[data])
       const handleAdd =()=>{
       for(let i=0;i<data?.candidateName[0]?.split(",")?.length;i++){
        setName(data?.candidateName[0]?.split(","))
        setParty(data?.partyName[0]?.split(","))
       }
       }
    console.log( " name in the ",name,party)
  return (
    <div className='flex flex-col '>
 
     {name.map((voting,i)=>
      <div className='flex justify-center gap-10 p-4 border-4 rounded-2xl m-5 bg-sky-200 shadow-2xl text-stone-700' key={i}>
               <input type="radio" name="candidate" id="" />
               <div className='gap-5'>
                {voting}
                <span > {party[i]} </span>
                </div>
      </div>
     )}
     <button className='bg-green-500 rounded-lg p-3 w-40 self-center text-yellow-50'>Submit</button>
    </div>
  )
}

export default Vote
