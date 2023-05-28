import React, { useState } from 'react'

function SingUp() {
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAcepted:false
  })

  const changeHandeler=(e)=>{
    if(e.target.name==="isAcepted"){
      setData({...data,[e.target.name]:e.target.cheked})
    }else{
      setData({...data,[e.target.name]:e.target.value})
    }
  }


  return (
    <div className='max-w-[500px] m-auto border-[3px] rounded-lg h-[600px] mt-8 shadow-lg flex justify-center'>
      <form>
      <h1 className='text-center py-3 text-2xl text-blue-700 font-bold'>ثبت نام</h1>

      <div className='flex flex-col text-right py-4'>
        <label className='text-gray-400'>نام و نام خانوادگی</label>
        <input className='border-[2px] w-[300px] h-[33px] rounded-md placeholder:text-right ' type="text" name='name' value={data.name}  onChange={changeHandeler}/>
      </div>

      <div className='flex flex-col text-right py-4'>
        <label className='text-gray-400'>ایمیل</label>
        <input className='border-[2px] w-[300px] h-[33px] rounded-md placeholder:text-right' type="text" name='email' value={data.email}  onChange={changeHandeler}/>
      </div>

      <div className='flex flex-col text-right py-4'>
        <label className='text-gray-400'>رمز ورود</label>
        <input className='border-[2px] w-[300px] h-[33px] rounded-md placeholder:text-right' type="text" name='password' value={data.password}  onChange={changeHandeler}/>
      </div>

      <div className='flex flex-col text-right py-4'>
        <label className='text-gray-400'>تکرار رمز ورود</label>
        <input className='border-[2px] w-[300px] h-[33px] rounded-md placeholder:text-right' type="text" name='name' value={data.confirmPassword}  onChange={changeHandeler}/>
      </div>

      <div className='flex justify-center gap-3'>
      <label className='text-gray-500'>قوانین زود فود را قبول میکنم</label>
      <input type="checkbox" value={data.isAcepted} />
      </div>

      <div className='flex flex-col items-center py-2'>
      <a className='text-blue-600 text-sm py-2' href="#">ورود به حساب کاربری</a>
      <button className='py-2 bg-blue-600 text-white rounded-lg w-[200px]' type='submit'>ثبت نام</button>
      </div>
      </form>
    </div>
  )
}

export default SingUp