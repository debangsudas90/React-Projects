import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try
    {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res.user)

      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(  
        () => {
          getDownloadURL(storageRef).then(async (downloadURL) => {

            try{
                //update profile
                await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL
              })

              //create user
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL
              });

              //empty user chat on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {})
              navigate("/")

            } catch(error) {
              console.log(error)
              setErr(true)
            }
          });
        },
        (error) => {
          setErr(true)
          console.log(error)
        }
      );

    } catch(error) {
      setErr(true)
      console.log(error)
    }

  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatWorld</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='name'/>
                <input type='text' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{ display: 'none' }}type= 'file' id='file'/>
                <label htmlFor='file'>
                  <img src={Add} alt=''/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went Wrong!!</span>}
            </form>
            <p>Already have a account? <Link to="/login">Sign In</Link></p>
        </div>
    </div>
  )
}

export default Register