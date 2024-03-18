import React from 'react'

const Login = () => {
  return (
    <div className='flex w-full items-center h-screen  bg-indigo-900'>
    <div className='flex justify-center bg-violet-200 border-2  opacity-55  border-black  w-[50vw] h-96 rounded-lg items-center mx-auto' >
        <form className='flex flex-col ' >
         
          <input className='text-center  border-2 border-indigo-400  mb-2' type="email"  placeholder='Email'/>
          <input className='text-center  border-2 border-indigo-400  mb-2' type="password" name=""  placeholder='Password'/>
          <input className='text-center  border-2 border-indigo-400  mb-2 bg-cyan-900 text-slate-200 rounded-sm' type="submit" value="Register" />
        </form>
    </div>
    </div>
  )
}

export default Login
