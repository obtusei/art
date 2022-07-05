import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [fullname,setFullname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password,setPassword]= useState('');
  const[confirmpassword,setConfirmPassword]= useState('');

  function submitForm(){

    const data = {
      fullname:fullname,
      username:username,
      email:email,
      password:password
    }

    
  }

  return (
    <div>
        <div>
          Get #Creative with AHT
        </div>

        <div>
          <div>
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
              <div>
                <label>Full Name:</label> <br/>
                <input type={'text'} placeholder={"Enter your name"} value={fullname} onChange={(e) => setFullname(e.target.value)}/>
              </div>

              <div>
                <label>Username:</label> <br/>
                <input type={'text'} placeholder={"Enter your username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div>
                <label>Email:</label> <br/>
                <input type={'email'} placeholder={"Enter your email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div>
                <label>Password:</label> <br/>
                <input type={'password'} placeholder={"Create a password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div>
                <label>Confirm password:</label> <br/>
                <input type={'password'} placeholder={"Re-enter your password"} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
              <div>
                <button type='submit'>
                  Sign Up 
                </button>
              </div>

              <div>
                <p>Already have an account?</p><Link href="/login">Login</Link>
              </div>

              
            </form>
          </div>
        </div>
      
    </div>
  )
}
