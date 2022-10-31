import styles from '../styles/signup.module.css'
import bstyles from '../styles/components/Button.module.css'
import Link from 'next/link'
import { useSession,signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Lottie from "lottie-react"
import loginAnimation from "../public/loginTwo.json"
export default function Home() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()
  const {data:session} = useSession()
  if (session){
    router.push('/');
  }
  return (
    <Container className={styles.container}>
      <Row>
        <Col style={{display:"flex",justifyContent:"center"}}>
            <Lottie animationData={loginAnimation} style={{height:500}}/>;
        </Col>
        <Col style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h1>login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type={'text'} placeholder={"enter your username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
              <Form.Text style={{color:"red"}}></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type={'password'} placeholder={"enter a password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button className={bstyles.filled} style={{width:"100%",backgroundColor:"red"}} onClick={
                  ()  => {
                    let data={
                    username:username,
                    password:password
                  }
                    signIn("credentials", data)
                    
                  }
                } disabled={username === "" || password === ""}>
                  login
                </Button>
            </Form>
            <br />           
              <div>
                <p>not a user yet? <Link href="/signup"><a style={{color:"red"}}>signup</a></Link></p>
              </div>
        </Col>
      </Row>
    </Container>
  )
}
