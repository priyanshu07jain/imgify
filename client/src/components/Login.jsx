import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const[state,setState]=useState('Login');
    const{setshowLogin,backendUrl,setToken,setUser}=useContext(AppContext)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

     const onSubmitHandler=async(e)=>{
      e.preventDefault();
      try{
 
        if(state==='Login'){
         const {data}= await axios.post(backendUrl+'/api/user/login',{
            email,password
          })
          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.getItem('token',data.token)
            setshowLogin(false)
          }
          else{
            toast.error(data.message)
          }
        }
        else{
          const {data}= await axios.post(backendUrl+'/api/user/register',{
           name,email,password
          })
          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.getItem('token',data.token)
            setshowLogin(false)
          }
          else{
            toast.error(data.message)
          }
        }
      }
      catch(error){
        toast.error(error.message)
      }
     }


    useEffect(()=>{
 document.body.style.overflow='hidden';
 return()=>{
  document.body.style.overflow='unset';
 }
    },[])
  return (
    <div
    
     className=' fixed top-0 right-0 bottom-0 left-0 z-10 backdrop:blur-sm bg-black/30  flex justify-center items-center'>
<motion.form  onSubmit={onSubmitHandler}
 initial={{opacity:0.2,y:50}} 
     transition={{duration:0.4}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
className=' relative bg-white p-10 rounded-xl text-slate-500'>
    <h1 className=' text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
    <p className=' text-sm'>Welcome back! Please Sign in to continue</p>
   {state!=='Login'&&<div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
        <img width={20} src={assets.profile_icon} />
        <input onChange={e=>setName(e.target.value)} value={name} className=' outline-none text-sm' placeholder='Full Name' type='text' required />
    </div>}
    <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
        <img width={12} src={assets.email_icon} />
        <input onChange={e=>setEmail(e.target.value)} value={email} className=' outline-none text-sm' placeholder='Email Id' type='email' required />
    </div>
    <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
        <img width={10} src={assets.lock_icon} />
        <input onChange={e=>setPassword(e.target.value)} value={password} className=' outline-none text-sm' placeholder='Password' type='password' required />
    </div>
    <p className=' text-sm  text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
    <button className=' bg-blue-600 w-full text-white py-2 rounded-full'>{state==='Login'?'login':'create account'}</button>
  {state==='Login' ? <p className=' mt-5 text-center'>Don't have a account?<span className=' text-blue-600 cursor-pointer' onClick={()=>{setState('Signup')}}>sign up</span></p>
    :<p className=' mt-5 text-center'>Aready have a account?<span className=' text-blue-600 cursor-pointer' onClick={()=>{setState('Login')}} >Login</span></p>}
    <img src={assets.cross_icon} className=' absolute top-5 right-5  cursor-pointer' onClick={()=>{setshowLogin(false)}}></img>
</motion.form>
    </div>
  )
}

export default Login