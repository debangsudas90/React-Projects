import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatWorld</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='name'/>
                <input type='text' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{ display: 'none' }}type= 'file' id='file'/>
                <label htmlFor='file'>
                  <img src={Add} alt=''/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have a account? Sign in</p>
        </div>
    </div>
  )
}

export default Register