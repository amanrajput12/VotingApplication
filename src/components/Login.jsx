import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './utils/UserSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data,setData]= useState({
    email:"",
    password:""
  })

 


  const fetchLogin= async()=>{
    const login = await fetch("/v1/user/login",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
    },
      body:JSON.stringify(data)
    })
    const value = await login.json()
    console.log('datain login',value);
    if(value.data.verfied){
       dispatch(addUser({email:value.data.email,userName:value.data.userName,verified:value.data.verfied}))
      navigate("/vote/voting")
    }

  }

  
  return (
    <div className='flex w-full items-center h-screen  bg-indigo-900'>
    <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto' >
        <form onClick={(e)=>e.preventDefault()} className='flex flex-col ' >
         
          <input onChange={(e)=>setData({...data,email:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="email"  placeholder='Email'/>
          <input onChange={(e)=>setData({...data,password:e.target.value})} className='text-center  border-2 border-indigo-400  mb-2' type="password" name=""  placeholder='Password'/>
          <input onClick={fetchLogin} className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Register" />
        </form>
    </div>
    </div>
  )
}

export default Login
