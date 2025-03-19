import React, { useState } from 'react';
import './RegisterPage.css';

function Register() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div style={{marginBottom: 75}}/>
        <div className='Register'>
            <h1 style={{ textAlign: 'center', marginBottom: 0, paddingBottom: 0 }}>Create an account</h1>
            <p style={{ textAlign: 'center', margin: 0 }}>Connect with your friends today!</p>
            <div style={{marginBottom: 60}}/>
            <div>
                <input type="text" name="username" className='username' placeholder='Enter your username'/>
                <input type="text" name="email" className='email' placeholder='Enter your email'/>
                <input type="text" name="phone" className='phone' placeholder='Enter your phone number'/>
                <input type="password" name="password" className='password' placeholder='Enter your password'/>
                <input type="passwordAgain" name="passwordAgain" className='passwordAgain' placeholder='Enter your password again'/>
            </div>
            <div style={{textAlign:'center', marginTop:10}}>
                <button className='RegisterButton'>Register</button>
                <p>Already have an account? <a href="">Log In</a></p>
            </div>
        </div>
        <div style={{marginBottom: 75}}/>
    </>
  )
}

export default Register