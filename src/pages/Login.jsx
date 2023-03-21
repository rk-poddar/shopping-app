import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ({auth}) => {
  const navigate = useNavigate()
  function login(){
    auth()
    navigate('/dashboard')
  }

  return (
    <div>
      <h3>Login Page</h3> 
      <div className='containerLogin'>
        <h1>Login</h1>
        <div className='loginInput'>
          <input type="text" placeholder='Enter the username' className='loginFiled'/> <br />
          <input type="password" placeholder='Enter the password' className='loginFiled' />
        </div>
        <button className='loginbutton' onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login