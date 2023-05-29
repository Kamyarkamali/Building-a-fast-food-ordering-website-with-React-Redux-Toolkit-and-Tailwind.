import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//Tostify
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../Toast/toast';
import { ToastContainer } from 'react-toastify';

//Validate
import validate from './validation'

function SingUp() {
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAcepted:false
  })
  const [errors,setErrors]=useState({});
  const [touch,setToche]=useState({});
  const navigate=useNavigate()


  useEffect(()=>{
    setErrors(validate(data,"singup"))
  },[data,touch])

  const changeHandeler=(e)=>{
    if(e.target.name==="isAcepted"){
      setData({...data,[e.target.name]:e.target.checked})
    }else{
      setData({...data,[e.target.name]:e.target.value})
    }
  }




//FoucsHandeler
const foucHandeler=(e)=>{
  setToche({...touch,[e.target.name]:true})
}

const submitHandeler=(e)=>{
  e.preventDefault()
  if(!Object.keys(errors).length){
    notify("ثبت نام انجام شد","success")
    navigate("/")
  } else{
    notify("پر کردن تمام مشخصات الزامی است","error")
    setToche({
      name:true,
      email:true,
      password:true,
      confirmPassword:true,
      isAcepted:true
    })
  }
}



  return (
    <div className='max-w-[500px] m-auto border-[3px] rounded-lg h-[600px] mt-8 shadow-lg flex justify-center'>
      <form onSubmit={submitHandeler}>
      <h1 className='text-center py-3 text-2xl text-blue-700 font-bold'>ثبت نام</h1>

      <div className='flex flex-col items-center text-right py-4'>
        <label className='text-gray-400'>نام و نام خانوادگی</label>
        <input className='border-[2px]  outline-none w-[300px] h-[33px] rounded-md placeholder:text-right ' type="text" name='name' value={data.name}  onChange={changeHandeler} onFocus={foucHandeler}/>
        {errors.name &&touch.name&& <span className='text-red-500 text-center text-sm py-122'>{errors.name}</span>}
      </div>

      <div className='flex flex-col text-right items-center py-4'>
        <label className='text-gray-400'>ایمیل</label>
        <input className='border-[2px] outline-none w-[300px] h-[33px] rounded-md placeholder:text-right' type="email" name='email' value={data.email}  onChange={changeHandeler} onFocus={foucHandeler}/>
        {errors.email && touch.email && <span className='text-red-500 text-center text-sm py-2'>{errors.email}</span>}

      </div>

      <div className='flex flex-col text-right py-4 items-center'>
        <label className='text-gray-400'>رمز ورود</label>
        <input className='border-[2px] outline-none w-[300px] h-[33px] rounded-md placeholder:text-right' type="password" name='password' value={data.password}  onChange={changeHandeler} onFocus={foucHandeler}/>
        {errors.password && touch.password&& <span className='text-red-500 text-center text-sm py-122'>{errors.password}</span>}
      </div>

      <div className='flex flex-col text-right py-4 items-center'>
        <label className='text-gray-400'>تکرار رمز ورود</label>
        <input className='border-[2px] outline-none w-[300px] h-[33px] rounded-md placeholder:text-right' type="password" name='confirmPassword' value={data.confirmPassword}  onChange={changeHandeler} onFocus={foucHandeler}/>
        {errors.confirmPassword && touch.confirmPassword&& <span className='text-red-500 text-center text-sm py-122'>{errors.confirmPassword}</span>}
      </div>

      <div className='flex justify-center gap-3 items-center'>
      <label className='text-gray-500'>قوانین زود فود را قبول میکنم</label>
      <input type="checkbox" value={data.isAcepted} name='isAcepted' onFocus={foucHandeler} onChange={changeHandeler }/>
      {errors.isAcepted && touch.isAcepted&& <span className='text-red-500 text-center text-sm py-122'>{errors.isAcepted}</span>}
      </div>

      <div className='flex flex-col py-2 items-center'>
      <Link className='text-blue-600 text-sm py-2' to={"/login"}> اکانت کاربری دارم </Link>
      <button className='py-2 bg-blue-600 text-white rounded-lg w-[200px]' type='submit'>ورود</button>
      </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default SingUp