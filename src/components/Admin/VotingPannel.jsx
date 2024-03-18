import React, { useState } from 'react';

const VotingPannel = () => {
  
   
  
  return (
    <div className='flex '>
      <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto'>
        <form  className='flex flex-col' action="">
            <input className='text-center border-2 border-indigo-400  mb-2'  type="text"  placeholder='Candidate Name' />
            <input className='text-center border-2 border-indigo-400  mb-2' type="text" placeholder='Party Name' />
            <input className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Add Candidate" />
            <input className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Add VotingPanel" />
        </form>
      </div>
    </div>





  )
}

export default VotingPannel
