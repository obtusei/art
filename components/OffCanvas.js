import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/router';
import Link from 'next/link';
import bstyles from "../styles/components/Button.module.css"
import { MenuIcon } from './Icons';
import { useSession, signOut } from "next-auth/react"
function OffcanvasExample() {
  const router = useRouter()
  const { data: session } = useSession()
  const mainColor = router.pathname == "/" ? "white":"black"
  const navItems = [
    {
      name:"arts",
      href:"/arts"
    },
    {
      name:"artists",
      href:"/artists"
    },
    {
      name:"museums",
      href:"/museums"
    }
  ]
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} size="sm" style={{border:"none", color:router.pathname == "/" ? "white":"black",fontSize:"24px"}}>
              <MenuIcon isDark={router.pathname != "/"}/>
            </Navbar.Toggle>
              <Navbar.Brand href="/" style={{color:router.pathname == "/" ? "white":"black",fontFamily:"Bodoni Moda"}}>aht</Navbar.Brand>
            </div>
            <div>
              {
                !session ? 
                <><Button className={router.pathname == "/" ? bstyles.default:bstyles.defaultDark} onClick={() => router.push("/login")}>login</Button>
              <Button className={bstyles.filled} onClick={() => router.push("/signup")}>sign up</Button>
              </>:
              <div>
              <Button disabled style={{backgroundColor:"transparent",fontFamily: 'Inria Sans, sans-serif',border:"none",opacity:"1",color:mainColor}}>{session?.user?.name}</Button>
              <Button className={bstyles.filled} onClick={() => signOut()}>sign out</Button>
              </div>
              }
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{
                width:"200px"
              }}
              
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{fontFamily:"Bodoni Moda"}}>
                  art<br />history<br />tracker
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <br />
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {
                    navItems.map((navItem,index) => (
                      <Nav.Link href={navItem.href} as={Link} key={index}><p>{navItem.name}</p></Nav.Link>
                    ))
                  }
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

