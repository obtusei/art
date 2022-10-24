import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession, signOut } from "next-auth/react"
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar(){

    const router = useRouter()
    const linkitem = {
        "color": router.pathname === "/" ? "white" : "black",
        alignItems: "center",
    }
    const { data: session } = useSession()
    return (
        <div className={styles.navbar}>
            <div  className={styles.nav}>
                <Link href={"/"} className={styles.logo}><span style={linkitem}>Art History Tracker</span></Link>
                <div className={styles.hamMenu}><button>Menu</button></div>
                <div className={styles.mainNav}>
                    
                    {/* <ul className={styles.navitem}>
                     <li className={styles.linkitem} style={linkitem}><Link href="/">home</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/arts">arts</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/artists">artists</Link></li>   
                     <li className={styles.linkitem} style={linkitem}><Link href="/museums">museums</Link></li> 
                     <li className={styles.linkitem} style={linkitem}><Link href="/about">about</Link></li> 
                     {
                        session ? <>
                        <li className={styles.linkitem} style={linkitem}>{session.user.name}</li>
                        <li className={styles.linkitem} style={linkitem}><button onClick={() => signOut()}>sign out</button></li> 
                        </>:
                        <>
                        <li className={styles.linkitem} style={linkitem}><Link href="/login">login</Link></li> 
                        <li className={styles.linkitemButton} style={linkitem}><Link href="/signup">sign up</Link></li> 
                        </>
                     }
                    </ul> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">home</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">arts</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">artists</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">museums</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">about</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            
        </div>
    )
}