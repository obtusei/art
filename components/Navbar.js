import styles from "../styles/Nav.module.css"
import Link from "next/link"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div  className={styles.nav}>
                Art History Tracker
                <div>
                    <ul className={styles.navitem}>
                     <li className={styles.linkitem}><Link href="/">Home</Link></li>   
                     <li className={styles.linkitem}><Link href="/arts">Arts</Link></li>   
                     <li className={styles.linkitem}><Link href="/artists">Artists</Link></li>   
                     <li className={styles.linkitem}><Link href="/museums">Museums</Link></li> 
                     <li className={styles.linkitem}><Link href="/about">About</Link></li> 
                     <li className={styles.linkitem}><Link href="/login">Login</Link></li> 
                     <li className={styles.linkitem}><Link href="/signup">Sign Up</Link></li> 
                      
                    </ul>
                </div>
            </div>
            
        </div>
    )
}