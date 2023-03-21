import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ulogout}) => {
    const navigate = useNavigate()
    function logout(){
        ulogout()
        navigate('/login')
    }

  return (
    <div>
    <h3>Dashboard Page</h3>    
    <button onClick={logout} className='btn'>Logout</button>
    </div>
  )
}

export default Dashboard