import styles from '../styles/signup.module.css'
import Link from 'next/link'
import { useSession,signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Home() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()
  const {data:session} = useSession()
  if (session){
    router.push('/');
  }
  return (
    <div className={styles.container}>

        <div className={styles.column2}>
          <div className={styles.signup}>
            <h1>login</h1>
            

              <div>
                <label>username:</label> <br/>
                <input type={'text'} placeholder={"enter your username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <br/>
              <div>
                <label>password:</label> <br/>
                <input type={'password'} placeholder={"create a password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <br/>
              <div>
                <button style={{width:"100%"}} onClick={
                  ()  => {
                    let data={
                    username:username,
                    password:password
                  }
                    signIn("credentials", data)
                    
                  }
                }>
                  login
                </button>
              </div>

              <div>
                <p>not a user yet? <Link href="/signup">signup</Link></p>
              </div>
          </div>
        </div>
      
    </div>
  )
}
