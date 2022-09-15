import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
export default function Navbar(){

    const router = useRouter()
    const linkitem = {
        "color": router.pathname === "/" ? "white" : "black",
    }
    return (
        <div className={styles.navbar}>
            <div  className={styles.nav}>
                <Link href={"/"} className={styles.logo}>Art History Tracker</Link>
                <div className={styles.hamMenu}><button>Menu</button></div>
                <div className={styles.mainNav}>
                    
                    <ul className={styles.navitem}>
                     <li className={styles.linkitem} style={linkitem}><Link href="/">Home</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/arts">Arts</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/artists">Artists</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/museums">Museums</Link></li> 
                     <li className={styles.linkitem} style={linkitem}><Link href="/about">About</Link></li> 
                     <li className={styles.linkitem} style={linkitem}><Link href="/login">Login</Link></li> 
                     <li className={styles.linkitemButton} style={linkitem}><Link href="/signup">Sign Up</Link></li> 
                     
                      
                         
                      
                    </ul>
                </div>
            </div>
            
        </div>
    )
}