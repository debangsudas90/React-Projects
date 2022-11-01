import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatWorld</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>Dont have an account? Register</p>
        </div>
    </div>
  )
}

export default Login