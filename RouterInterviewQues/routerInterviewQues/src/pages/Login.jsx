import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
        navigate('/loginContent');


    }
  return (
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='submit' />
        </form>

    </div>
  )
}

export default Login