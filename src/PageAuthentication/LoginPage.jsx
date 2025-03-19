import React, { useState } from 'react';
import './LoginPage.css';

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div style={{marginBottom: 75}}/>
        <div className='Login'>
            <h1>Hi, Welcome Back! 👋</h1>   
            <div style={{marginBottom: 90}}/>
            <div>
                <p style={{marginBottom: 5}}>Email</p>
                <input type="text" name="email" className='email' placeholder='Enter your email'/>
            </div>
            <br />
            <div>
                <p style={{marginBottom: 5}}>Password</p>
                <input type="password" name="password" className='password' placeholder='Enter your password'/>
            </div> 
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type="checkbox" name="rememberMe" id="rememberMe" style={{cursor:'pointer', width:15}}/>
                    <p style={{marginLeft: 5}}>Remember Me</p>
                </div>
                <a href="">Forgot Password?</a>
            </div>
            <div style={{textAlign:'center', marginTop:50}}>
                <button className='LoginButton'>Login</button>
            </div>
        </div>
        <div style={{marginBottom: 75}}/>
    </>
  )
}

export default Login