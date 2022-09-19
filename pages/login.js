import styles from '../styles/signup.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>

        <div className={styles.column2}>
          <div className={styles.signup}>
            <h1>login</h1>
            <form>

              <div>
                <label>username:</label> <br/>
                <input type={'text'} placeholder={"enter your username"}/>
              </div>

              <br/>
              <div>
                <label>password:</label> <br/>
                <input type={'password'} placeholder={"create a password"}/>
              </div>
              <br/>
              <div>
                <button type='submit'  style={{width:"100%"}}>
                  login 
                </button>
              </div>

              <div>
                <p>not a user yet? <Link href="/signup">signup</Link></p>
              </div>

              
            </form>
          </div>
        </div>
      
    </div>
  )
}
