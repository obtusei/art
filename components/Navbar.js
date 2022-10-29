import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession, signOut } from "next-auth/react"
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar(){

  const router = useRouter()
  const linkitem = {
      "color": router.pathname === "/" ? "white" : "black",
      alignItems: "center",
  }
  const { data: session } = useSession()
  return (
    <div>
        {/* <div  className={styles.nav}>
          <div className={styles.logoAndMenu}>
              <Dropdown>
                  <Dropdown.Toggle className={styles.dropDownButton}>
                    <Image src="/chevron.svg" alt="=" layout='fill'/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item><Link href={"/arts"}>arts</Link></Dropdown.Item>
                      <Dropdown.Item><Link href={"/artists"}>artists</Link></Dropdown.Item>
                      <Dropdown.Item><Link href={"/museums"}>museums</Link></Dropdown.Item>
                      <Dropdown.Item><Link href={"/about"}>about</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              <Link href={"/"} className={styles.logo}><span style={linkitem}>Art History Tracker</span></Link>
          </div>
            <div className={styles.hamMenu}><button>Menu</button></div>
            <div className={styles.mainNav}>
                
                 <ul className={styles.navitem}>
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
                </ul> 
                
            </div>
        </div> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">aht</Navbar.Brand>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">arts</Nav.Link>
            <Nav.Link href="#pricing">artists</Nav.Link>
            <Nav.Link href="#pricing">museums</Nav.Link>
            <Nav.Link href="#pricing">log in</Nav.Link>
            <Nav.Link href="#pricing">sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}