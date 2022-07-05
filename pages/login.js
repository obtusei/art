import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>

        <div>
          <div>
            <h1>Log In</h1>
            <form>

              <div>
                <label>Username:</label> <br/>
                <input type={'text'} placeholder={"Enter your username"}/>
              </div>


              <div>
                <label>Password:</label> <br/>
                <input type={'password'} placeholder={"Create a password"}/>
              </div>
              
              <div>
                <button type='submit'>
                  Log In 
                </button>
              </div>

              <div>
                <p>Not a user yet?</p><Link href="/signup">Sign Up</Link>
              </div>

              
            </form>
          </div>
        </div>
      
    </div>
  )
}
