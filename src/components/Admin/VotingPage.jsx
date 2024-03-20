import React from 'react'
import { useSelector } from 'react-redux'

const VotingPage = () => {
    const data = useSelector((Store)=>Store.vote.Voting)
    console.log("voting page ",data);
  return (
    <div>
      
         {
            data.map((val,i)=>
             <div className='flex gap-6 ' key={i}>
                <input type="radio"  name="candidate"  id={val.radioId} />
                <div>
                <h1>{val.name}</h1>
                <h2>{val.party}</h2>
                </div>
             </div>
            )
         }
    </div>
  )
}

export default VotingPage
