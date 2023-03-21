import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <div className='login'>
    <div className='loginWrapper'>
        <div className='loginLeft'>
            <h3 className='loginTitle'>FACE-BOOK</h3>
            <span className='loginDes'>See what your friends are doing and regret your life on FACE-BOOK</span>
        </div>
        <div className='loginRight'>

            <div className='loginStart'>
            <input placeholder='username' className='password' />
        <input placeholder='email' className='email'/>
        <input placeholder='password' className='password' />
        <input placeholder='password again' className='password' />
        <button className='SignInButton' >Sign Up</button>
        <span className='passwordForgot'>Forgot Password?</span>
        <button className='loginRegisterButton'>Create a account</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Register