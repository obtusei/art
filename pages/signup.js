import styles from '../styles/signup.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import bcrypt, { genSalt } from 'bcryptjs'
export default function Home() {

  const [fullname,setFullname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password,setPassword]= useState('');
  const[confirmpassword,setConfirmPassword]= useState('');
  const router  = useRouter();

  async function submitForm(){
    try{
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password,salt);
      const resp = await axios.post('http://localhost:3000/api/users/create',{ fullname,username, email,hashPassword});
      console.log(resp.data);
      router.push("/login")
    }
    catch{
      console.log('Error');
    }
    
    

}

  return (
    <div className={styles.container}>
        <div className={styles.column1}>
          <h1>Get <span style={{color:"orange"}}>#Creative</span> with AHT</h1>
        </div>

        <div className={styles.column2}>
          <div className={styles.signup}>
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
              <div>
                <label>Full Name:</label> <br/>
                <input type={'text'} placeholder={"enter your name"} value={fullname} onChange={(e) => setFullname(e.target.value)}/>
              </div>
              <br/>
              <div>
                <label>Username:</label> <br/>
                <input type={'text'} placeholder={"enter your username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <br/>
              <div>
                <label>Email:</label> <br/>
                <input type={'email'} placeholder={"enter your email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <br/>
              <div>
                <label>Password:</label> <br/>
                <input type={'password'} placeholder={"create a password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <br/>
              <div>
                <label>Confirm password:</label> <br/>
                <input type={'password'} placeholder={"re-enter your password"} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div> <br/>
              <div>
                <button type='submit' onClick={submitForm} style={{width:"100%"}}>
                  Sign Up 
                </button>
              </div>
              <div>
                <p>already have an account? <Link href="/login">login</Link></p>
              </div>

              
            </form>
          </div>
        </div>
      
    </div>
  )
}
