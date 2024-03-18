import React, { useState } from 'react'

const Login = () => {
  const [data,setData]= useState({
    email:"",
    password:""
  })
  console.log('datain login',data);
  return (
    <div className='flex w-full items-center h-screen  bg-indigo-900'>
    <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto' >
        <form onClick={(e)=>e.preventDefault()} className='flex flex-col ' >
         
          <input onChange={(e)=>setData({...data,email:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="email"  placeholder='Email'/>
          <input onChange={(e)=>setData({...data,password:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="password" name=""  placeholder='Password'/>
          <input className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Register" />
        </form>
    </div>
    </div>
  )
}

export default Login
